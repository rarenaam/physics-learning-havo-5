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
  const [routerKey] = React.useState(() => `router-${Date.now()}`);

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <BrowserRouter key={routerKey} basename="/physics-learning-havo-5">
            <Routes>
              {/* De 'index' route wordt geladen op de basis-URL */}
              <Route index element={<Index />} />
              
              {/* Relatieve paden zonder / werken beter icm basename */}
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="forgot-password" element={<ForgotPassword />} />
              <Route path="reset-password" element={<ResetPassword />} />

              <Route 
                path="dashboard" 
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="quiz/:topic" 
                element={
                  <ProtectedRoute>
                    <Quiz />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="quiz" 
                element={
                  <ProtectedRoute>
                    <Quiz />
                  </ProtectedRoute>
                } 
              />

              {/* Vangt alle onbekende paden op binnen de basename */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;
