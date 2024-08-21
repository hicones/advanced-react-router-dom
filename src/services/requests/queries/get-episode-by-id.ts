import { EpisodeProps } from "@/types/episodes";
import { QueryFunctionContext } from "@tanstack/react-query";

export async function getEpisodeById({
  queryKey,
}: QueryFunctionContext<string[]>) {
  const [, id] = queryKey;

  const response = await fetch(
    `https://rickandmortyapi.com/api/episode/${id}`,
    {
      method: "GET",
    },
  );
  const data: EpisodeProps = await response.json();

  return data;
}
