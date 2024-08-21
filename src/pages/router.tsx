import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ErrorPage } from "./error";
import { HomePage } from "./home";

import { AppLayout, themeLoader } from "@/layouts";
import { CharacterPage } from "./characters/character";
import { CharactersPage } from "./characters";
import { EpisodesPage } from "./episodes";
import { EpisodePage } from "./episodes/episode";
import { LocationsPage } from "./locations";
import { LocationPage } from "./locations/location";

const router = createBrowserRouter(
  [
    {
      element: <AppLayout />,
      loader: themeLoader,
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
              element: <EpisodesPage />,
              index: true,
            },
            {
              path: ":id",
              element: <EpisodePage />,
            },
          ],
        },
        {
          path: "/locations",
          children: [
            {
              element: <LocationsPage />,
              index: true,
            },
            {
              element: <LocationPage />,
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
