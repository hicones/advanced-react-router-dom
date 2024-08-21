import { CharactersResponseModel } from "@/types/characters";
import { QueryFunctionContext } from "@tanstack/react-query";

export async function getCharacters({
  queryKey,
}: QueryFunctionContext<string[]>) {
  const [, page] = queryKey;
  let url = new URL("https://rickandmortyapi.com/api/character");
  url.searchParams.append("page", page.toString());

  const response = await fetch(url, {
    method: "GET",
  });
  const data: CharactersResponseModel = await response.json();

  return data;
}
