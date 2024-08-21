import { LocationProps } from "@/types/locations";
import { QueryFunctionContext } from "@tanstack/react-query";

export async function getLocationById({
  queryKey,
}: QueryFunctionContext<string[]>) {
  const [, id] = queryKey;

  const response = await fetch(
    `https://rickandmortyapi.com/api/location/${id}`,
    {
      method: "GET",
    },
  );
  const data: LocationProps = await response.json();

  return data;
}
