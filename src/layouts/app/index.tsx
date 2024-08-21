import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Header } from "@/components/app";

const queryClient = new QueryClient();

export function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <Header />
        <Outlet />
      </QueryClientProvider>
    </div>
  );
}
