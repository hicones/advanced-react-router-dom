import { CharacterProps } from "@/types/characters";
import { QueryFunctionContext } from "@tanstack/react-query";

export async function getCharacterById({
  queryKey,
}: QueryFunctionContext<string[]>) {
  const [, id] = queryKey;

  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`,
    {
      method: "GET",
    },
  );
  const data: CharacterProps = await response.json();

  return data;
}
