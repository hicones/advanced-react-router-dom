import { Paginator } from "@/components/app";
import { getCharacters } from "@/services/requests/queries/get-characters";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useSearchParams } from "react-router-dom";
import { LoadingCharactersList } from "./components/loading";

export function CharactersPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page") || "1");

  const { data, isLoading } = useQuery({
    queryKey: ["characters", page.toString()],
    queryFn: getCharacters,
  });

  const onPageChange = (page: number) => {
    if (page === 1) {
      setSearchParams({});
      return;
    } else if (page === data?.info.pages) {
      setSearchParams({ page: data?.info.pages.toString() });
      return;
    } else {
      setSearchParams({ page: page.toString() });
    }
  };

  const navigate = useNavigate();

  return (
    <main className="flex items-center justify-center w-full flex-1">
      <section className="flex flex-col gap-8 p-4 pt-10 w-full">
        {isLoading ? (
          <LoadingCharactersList />
        ) : (
          <ul className="grid 2xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {data?.results.map((character) => (
              <li
                key={character.id}
                onClick={() =>
                  navigate(`/characters/${character.id}`, {
                    state: character,
                  })
                }
                className="flex flex-col items-center justify-center gap-2 p-2 rounded border-2 border-muted shadow-sm cursor-pointer hover:scale-105 transition duration-300 animate-fade-in"
              >
                <img
                  src={character.image}
                  alt={character.name}
                  className="rounded"
                />
                <h2 className="font-semibold text-lg">{character.name}</h2>
                <p className="text-muted-foreground">{character.species}</p>
              </li>
            ))}
          </ul>
        )}
        {data && data?.results?.length > 0 && (
          <Paginator
            totalPages={data?.info.pages || 1}
            onPageChange={onPageChange}
            page={page}
          />
        )}

        {!isLoading && data?.results?.length === 0 && (
          <p className="text-center text-lg font-semibold text-foreground">
            No characters found
          </p>
        )}
      </section>
    </main>
  );
}
