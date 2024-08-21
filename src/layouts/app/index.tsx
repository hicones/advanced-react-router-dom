import { Outlet, useLoaderData } from "react-router-dom";
import { Toaster } from "sonner";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Header } from "@/components/app";
import { useEffect } from "react";

const queryClient = new QueryClient();

export function AppLayout() {
  const data = useLoaderData() as { theme: string };

  useEffect(() => {
    document.documentElement.className = data.theme;
  }, [data]);

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

export async function themeLoader() {
  console.log("rodou");
  const prefersDarkScheme = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;
  const theme = prefersDarkScheme ? "dark" : "light";

  return { theme };
}
