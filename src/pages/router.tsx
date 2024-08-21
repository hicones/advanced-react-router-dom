import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ErrorPage } from "./error";
import { HomePage } from "./home";

import { AppLayout } from "@/layouts";
import { CharacterPage } from "./characters/character";
import { CharactersPage } from "./characters";

const router = createBrowserRouter(
  [
    {
      element: <AppLayout />,
      errorElement:
        process.env.NODE_ENV === "development" ? undefined : <ErrorPage />,
      path: "/",
      children: [
        {
          element: <HomePage />,
          index: true,
          hydrateFallbackElement: <div>Loading...</div>,
          path: "/",
        },
        {
          path: "/characters",
          children: [
            {
              element: <CharactersPage />,
              index: true,
            },
            {
              element: <CharacterPage />,
              path: ":id",
            },
          ],
        },
        {
          path: "/episodes",
          children: [
            {
              element: <div>Episodes</div>,
              index: true,
            },
            {
              path: ":id",
              element: <div>Episode id</div>,
            },
          ],
        },
        {
          path: "/locations",
          children: [
            {
              element: <div>Locations</div>,
              index: true,
            },
            {
              element: <div>Location id</div>,
              path: ":id",
            },
          ],
        },
      ],
    },
    {
      element: <ErrorPage />,
      path: "*",
    },
  ],
  {
    basename: process.env.NODE_ENV === "development" ? undefined : "/",
  },
);

export function Router() {
  return <RouterProvider router={router} />;
}
