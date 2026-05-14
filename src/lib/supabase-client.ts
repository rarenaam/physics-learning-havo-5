/**
 * Supabase Client - Configurable client for generated apps using Supabase
 *
 * DO NOT MODIFY THIS FILE - Part of Episolo template.
 *
 * When Supabase mode is enabled, this client replaces the Episolo DB SDK.
 * The Supabase URL and anon key are injected at deployment time from app secrets.
 */

import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let SUPABASE_CONFIG: { url: string; anonKey: string } | null = null;
let supabaseInstance: SupabaseClient | null = null;

/**
 * Initialize the Supabase client with project credentials.
 * Called automatically by the deployment pipeline.
 */
export function initializeSupabase(url: string, anonKey: string) {
  SUPABASE_CONFIG = { url, anonKey };
  supabaseInstance = null;
}

function detectConfig(): { url: string; anonKey: string } | null {
  if (SUPABASE_CONFIG) return SUPABASE_CONFIG;

  if (typeof window !== "undefined") {
    const url =
      (window as any).__SUPABASE_URL__ || (window as any).SUPABASE_URL;
    const key =
      (window as any).__SUPABASE_ANON_KEY__ ||
      (window as any).SUPABASE_ANON_KEY;
    if (url && key) return { url, anonKey: key };
  }

  if (typeof import.meta !== "undefined") {
    const url = import.meta.env?.VITE_SUPABASE_URL;
    const key = import.meta.env?.VITE_SUPABASE_ANON_KEY;
    if (url && key) return { url, anonKey: key };
  }

  return null;
}

/**
 * Get the configured Supabase client instance.
 * Throws if credentials have not been provided.
 */
export function getSupabase(): SupabaseClient {
  if (supabaseInstance) return supabaseInstance;

  const config = detectConfig();
  if (!config) {
    throw new Error(
      "Supabase not configured. Add SUPABASE_URL and SUPABASE_ANON_KEY " +
        "to your app secrets in the Episolo dashboard.",
    );
  }

  supabaseInstance = createClient(config.url, config.anonKey);
  return supabaseInstance;
}

export { type SupabaseClient };
