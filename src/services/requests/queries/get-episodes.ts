import { EpisodesResponseModel } from "@/types/episodes";
import { QueryFunctionContext } from "@tanstack/react-query";

export async function getEpisodes({
  queryKey,
}: QueryFunctionContext<string[]>) {
  const [, page] = queryKey;
  let url = new URL("https://rickandmortyapi.com/api/episode");
  url.searchParams.append("page", page.toString());

  const response = await fetch(url, {
    method: "GET",
  });
  const data: EpisodesResponseModel = await response.json();

  return data;
}
