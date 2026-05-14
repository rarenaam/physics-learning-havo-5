/**
 * Entity Service - Behind-the-scenes API communication
 * This handles all the complexity so entities can be simple
 *
 * 🚨 CRITICAL: DO NOT MODIFY THIS FILE
 * This file is part of the Episolo Database SDK template.
 * Use createEntity() to create entities in src/entities/ instead.
 */

// Simple configuration (auto-detected or manually set)
let CONFIG: { appId: string; apiUrl: string } | null = null;
// Auto-initialized for this app (injected by Episolo)
initEntityService('j3pu1vha', 'https://www.episolo.com/api/app-db');


// Initialize configuration (can be called manually, but auto-detection is preferred)
export function initEntityService(appId: string, apiUrl: string) {
  if (!apiUrl) {
    throw new Error("API URL is required for entity service initialization");
  }
  CONFIG = { appId, apiUrl };
}

// Auto-detect app ID from various sources (similar to AI service pattern)
function detectAppId(): string | null {
  // Check explicit config first
  if (CONFIG?.appId) {
    return CONFIG.appId;
  }
  
  // Check window globals (injected during deployment)
  if (typeof window !== "undefined") {
    if ((window as any).APP_ID) {
      return (window as any).APP_ID;
    }
    if ((window as any).__APP_ID__) {
      return (window as any).__APP_ID__;
    }
  }
  
  // Check Vite environment variable
  if (typeof import.meta !== "undefined" && import.meta.env?.VITE_APP_ID) {
    return import.meta.env.VITE_APP_ID;
  }
  
  return null;
}

// Get API base URL
function getApiBaseUrl(): string {
  // PRIORITY 1: Check window global (injected during deployment - preferred for runtime)
  // This takes precedence because it's the correct URL for the deployed environment (E2B sandbox)
  // The build-time CONFIG might have localhost which won't work in cloud sandboxes
  if (typeof window !== "undefined") {
    if ((window as any).EPISOLO_API_URL) {
      return `${(window as any).EPISOLO_API_URL}/api/app-db`;
    }
    if ((window as any).__EPISOLO_API_URL__) {
      return `${(window as any).__EPISOLO_API_URL__}/api/app-db`;
    }
  }
  
  // PRIORITY 2: Check Vite environment variable (for build-time configuration)
  if (typeof import.meta !== "undefined" && import.meta.env?.VITE_EPISOLO_API_URL) {
    return `${import.meta.env.VITE_EPISOLO_API_URL}/api/app-db`;
  }
  
  // PRIORITY 3: Check explicit config (from initEntityService call)
  // This is lower priority because it may contain localhost URLs from build time
  if (CONFIG?.apiUrl) {
    return CONFIG.apiUrl;
  }
  
  // Default to relative path (for when running on same domain or proxied)
  return "/api/app-db";
}

// Get configuration with auto-detection
function getConfig() {
  // Try to auto-detect if not explicitly configured
  if (!CONFIG) {
    const appId = detectAppId();
    const apiUrl = getApiBaseUrl();
    
    if (appId) {
      CONFIG = { appId, apiUrl };
      console.log(`[Entity Service] Auto-initialized with appId: ${appId.substring(0, 8)}...`);
    }
  }
  
  if (!CONFIG || !CONFIG.appId) {
    throw new Error(
      "Entity service not initialized. App ID is missing.\n" +
      "Make sure one of the following is set:\n" +
      "  - window.APP_ID (injected in index.html)\n" +
      "  - VITE_APP_ID environment variable\n" +
      "  - Call initEntityService(appId, apiUrl) manually"
    );
  }
  
  return CONFIG;
}

// Track connectivity state to avoid spamming console with identical errors
let _lastConnectivityError: string | null = null;
let _consecutiveFailures = 0;

// Simple API wrapper with endpoint validation
async function apiCall<T = any>(
  endpoint: string,
  options: RequestInit = {},
  retryCount = 0,
): Promise<T> {
  const config = getConfig();

  // Validate endpoint - must be one of the allowed endpoints
  const allowedEndpoints = ["/list", "/create", "/update", "/delete"];
  const cleanEndpoint = endpoint.startsWith("/") ? endpoint : `/${endpoint}`;

  if (!allowedEndpoints.includes(cleanEndpoint)) {
    throw new Error(
      `Invalid endpoint: ${cleanEndpoint}. Must be one of: ${allowedEndpoints.join(", ")}`,
    );
  }

  const fullUrl = `${config.apiUrl}${cleanEndpoint}`;

  let response: Response;
  try {
    response = await fetch(fullUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-App-ID": config.appId,
        "x-episolo-app-id": config.appId,
        ...options.headers,
      },
      ...options,
    });
  } catch (networkError) {
    _consecutiveFailures++;
    const errMsg = (networkError as Error).message || "Unknown network error";
    if (_lastConnectivityError !== errMsg) {
      _lastConnectivityError = errMsg;
      console.error(
        `[Entity Service] Network error calling ${fullUrl}: ${errMsg}\n` +
        `  APP_ID: ${config.appId}\n` +
        `  API URL: ${config.apiUrl}\n` +
        `  Consecutive failures: ${_consecutiveFailures}\n` +
        `  Check: Is the API server reachable? Is your network blocking requests?`
      );
    }
    // Retry network errors up to 2 times with backoff
    if (retryCount < 2) {
      const delay = Math.pow(2, retryCount) * 500;
      await new Promise((r) => setTimeout(r, delay));
      return apiCall<T>(endpoint, options, retryCount + 1);
    }
    throw new Error(
      `Database connection failed: Cannot reach the server at ${config.apiUrl}. ` +
      `This may be caused by a network issue, firewall, VPN, or the server being temporarily unavailable.`
    );
  }

  // Retry 409 Conflict (concurrent update) with exponential backoff - max 3 retries
  if (response.status === 409 && retryCount < 3) {
    const delay = Math.pow(2, retryCount) * 100;
    await new Promise((r) => setTimeout(r, delay));
    return apiCall<T>(endpoint, options, retryCount + 1);
  }

  // Retry 5xx server errors once with backoff
  if (response.status >= 500 && retryCount < 1) {
    const delay = 1000;
    await new Promise((r) => setTimeout(r, delay));
    return apiCall<T>(endpoint, options, retryCount + 1);
  }

  if (!response.ok) {
    _consecutiveFailures++;
    const errorText = await response.text();
    if (response.status === 403) {
      console.error(
        `[Entity Service] Access denied (403) for app ${config.appId} on ${cleanEndpoint}.\n` +
        `  This usually means the app database has not been enabled or the app ID is incorrect.\n` +
        `  API URL: ${config.apiUrl}`
      );
    }
    throw new Error(
      `Database error (${response.status}): ${errorText || response.statusText}`
    );
  }

  // Reset failure tracking on success
  _consecutiveFailures = 0;
  _lastConnectivityError = null;

  return response.json();
}

// IMPORTANT: Do not export apiCall or create other API functions
// All API communication should go through the entity operations below

// Entity operations interface
export interface EntityOperations<T = any> {
  list(): Promise<T[]>;
  filter(criteria: Partial<T>): Promise<T[]>;
  get(id: string): Promise<T>;
  create(data: Omit<T, "id" | "createdAt" | "updatedAt">): Promise<T>;
  update(id: string, updates: Partial<T>): Promise<T>;
  delete(id: string): Promise<void>;
}

// Per-object update debounce state (scoped per createEntity call, i.e. per collection)
interface PendingUpdate<T> {
  timeout: ReturnType<typeof setTimeout>;
  resolvers: Array<{ resolve: (value: T) => void; reject: (err: unknown) => void }>;
  latestUpdates: Partial<T>;
}

// How long to wait before flushing a debounced update (ms).
// Coalesces rapid consecutive writes to the same object into a single API call,
// preventing Convex OCC errors when events fire faster than the mutation can commit.
const UPDATE_DEBOUNCE_MS = 300;

// Create entity operations for a collection
export function createEntity<T = any>(
  collectionName: string,
): EntityOperations<T> {
  // Keyed by object id - tracks debounced writes for this collection
  const pendingUpdates = new Map<string, PendingUpdate<T>>();

  return {
    async list(): Promise<T[]> {
      const result = await apiCall("/list", {
        body: JSON.stringify({
          collection_name: collectionName,
          limit: 100,
          include_metadata: true,
        }),
      });
      return result.items || [];
    },

    async filter(criteria: Partial<T>): Promise<T[]> {
      const items = await this.list();
      if (!criteria || Object.keys(criteria).length === 0) {
        return items;
      }

      return items.filter((item) => {
        return Object.entries(criteria).every(([key, value]) => {
          if (Array.isArray(value)) {
            return value.includes((item as any)[key]);
          }
          return (item as any)[key] === value;
        });
      });
    },

    async get(id: string): Promise<T> {
      const items = await this.list();
      const item = items.find(
        (item: any) => item.id === id || item.objectId === id,
      );
      if (!item) {
        throw new Error(`${collectionName} with id "${id}" not found`);
      }
      return item;
    },

    async create(data: Omit<T, "id" | "createdAt" | "updatedAt">): Promise<T> {
      const result = await apiCall("/create", {
        body: JSON.stringify({
          collection_name: collectionName,
          object_data: data,
        }),
      });
      return result;
    },

    async update(id: string, updates: Partial<T>): Promise<T> {
      // Debounce rapid consecutive updates to the same object.
      // If multiple callers update the same id within UPDATE_DEBOUNCE_MS, only
      // the latest data is sent and all callers receive the same result.
      // This prevents Convex OCC (OptimisticConcurrencyControlFailure) errors
      // caused by concurrent mutations on the same document.
      return new Promise<T>((resolve, reject) => {
        let pending = pendingUpdates.get(id);

        if (pending) {
          // Cancel the previously-scheduled flush and reuse the same pending entry
          clearTimeout(pending.timeout);
          pending.resolvers.push({ resolve, reject });
          pending.latestUpdates = updates; // Latest write wins
        } else {
          pending = {
            timeout: null as unknown as ReturnType<typeof setTimeout>,
            resolvers: [{ resolve, reject }],
            latestUpdates: updates,
          };
          pendingUpdates.set(id, pending);
        }

        // Capture reference so the timeout closure always accesses the same entry
        const captured = pending;
        captured.timeout = setTimeout(async () => {
          pendingUpdates.delete(id);
          try {
            const result = await apiCall<T>("/update", {
              body: JSON.stringify({
                collection_name: collectionName,
                object_id: id,
                object_data: captured.latestUpdates,
              }),
            });
            captured.resolvers.forEach((r) => r.resolve(result));
          } catch (err) {
            captured.resolvers.forEach((r) => r.reject(err));
          }
        }, UPDATE_DEBOUNCE_MS);
      });
    },

    async delete(id: string): Promise<void> {
      await apiCall("/delete", {
        body: JSON.stringify({
          collection_name: collectionName,
          object_id: id,
        }),
      });
    },
  };
}

// Auto-initialization happens lazily in getConfig() when first API call is made
// No explicit initialization is required if APP_ID is available in the environment

/**
 * Check database connectivity and return diagnostic information.
 * Useful for debugging "database not loading" issues.
 */
export async function checkDatabaseHealth(): Promise<{
  ok: boolean;
  appId: string | null;
  apiUrl: string;
  error?: string;
}> {
  const appId = detectAppId();
  const apiUrl = getApiBaseUrl();

  if (!appId) {
    return {
      ok: false,
      appId: null,
      apiUrl,
      error: "APP_ID is not set. The app configuration may not have been injected properly.",
    };
  }

  if (!apiUrl || apiUrl === "/api/app-db") {
    return {
      ok: false,
      appId,
      apiUrl,
      error: "EPISOLO_API_URL is not set. Database calls will use a relative URL which won't work in sandboxes.",
    };
  }

  try {
    const response = await fetch(`${apiUrl}/list`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-App-ID": appId,
        "x-episolo-app-id": appId,
      },
      body: JSON.stringify({
        collection_name: "_health_check",
        limit: 1,
        include_metadata: false,
      }),
    });

    if (response.ok) {
      return { ok: true, appId, apiUrl };
    }

    const errorText = await response.text();
    return {
      ok: false,
      appId,
      apiUrl,
      error: `Server returned ${response.status}: ${errorText}`,
    };
  } catch (err) {
    return {
      ok: false,
      appId,
      apiUrl,
      error: `Cannot reach server: ${(err as Error).message}`,
    };
  }
}

// CRITICAL: Do NOT export apiCall or any internal functions
// CRITICAL: Do NOT create entityRequest, postJson, or similar functions
// CRITICAL: Only use the exported entity operations through createEntity() and checkDatabaseHealth()
