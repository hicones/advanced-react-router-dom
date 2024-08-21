import { Outlet, useLoaderData } from "react-router-dom";
import { Toaster } from "sonner";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Header } from "@/components/app";
import { useEffect, useState } from "react";
import { Footer } from "@/components/app/footer";

const queryClient = new QueryClient();

export function AppLayout() {
  const data = useLoaderData() as { theme: string };
  const theme = sessionStorage.getItem("theme");
  const [isDarkMode, setIsDarkMode] = useState(
    theme ? (theme === "dark" ? true : false) : data.theme,
  );

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
    sessionStorage.setItem("theme", isDarkMode ? "light" : "dark");
  };

  useEffect(() => {
    if (theme && theme === "dark") {
      document.documentElement.classList.add(theme);
    } else if (!theme && data.theme) {
      document.documentElement.classList.add(data.theme);
      sessionStorage.setItem("theme", data.theme);
    }
  }, [data.theme, theme]);

  return (
    <div className="min-h-screen flex flex-col">
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <Header
          isDarkMode={isDarkMode}
          toggleTheme={toggleTheme}
        />
        <Outlet context={{ isDarkMode, toggleTheme }} />
        <Footer />
      </QueryClientProvider>
    </div>
  );
}

export async function themeLoader() {
  const prefersDarkScheme = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;
  const theme = prefersDarkScheme ? "dark" : "light";

  return { theme };
}
