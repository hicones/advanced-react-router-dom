import { LocationsResponseModel } from "@/types/locations";
import { QueryFunctionContext } from "@tanstack/react-query";

export async function getLocations({
  queryKey,
}: QueryFunctionContext<string[]>) {
  const [, page] = queryKey;
  let url = new URL("https://rickandmortyapi.com/api/location");
  url.searchParams.append("page", page.toString());

  const response = await fetch(url, {
    method: "GET",
  });
  const data: LocationsResponseModel = await response.json();

  return data;
}
