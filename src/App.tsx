import * as React from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Dashboard from "./pages/Dashboard";
import Quiz from "./pages/Quiz";

const queryClient = new QueryClient();

const App = () => {
  // De routerKey zorgt ervoor dat de router herlaadt als dat nodig is
  const [routerKey] = React.useState(() => `router-${Date.now()}`);

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          {/* De basename is cruciaal voor GitHub Pages om de routes te herkennen */}
          <BrowserRouter key={routerKey} basename="/physics-learning-havo-5">
            <Routes>
              {/* Hoofdpagina */}
              <Route path="/" element={<Index />} />
              
              {/* Authenticatie Routes */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/reset-password" element={<ResetPassword />} />

              {/* Beveiligde Routes (alleen toegankelijk na inloggen) */}
              <Route 
                path="/dashboard" 
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/quiz/:topic" 
                element={
                  <ProtectedRoute>
                    <Quiz />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/quiz" 
                element={
                  <ProtectedRoute>
                    <Quiz />
                  </ProtectedRoute>
                } 
              />

              {/* 404 Pagina voor onbekende URL's */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;
