import { Paginator } from "@/components/app";
import { getCharacters } from "@/services/requests/queries/get-characters";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useSearchParams } from "react-router-dom";

export function CharactersPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page") || "1");

  const { data, isLoading } = useQuery({
    queryKey: ["characters", page.toString()],
    queryFn: getCharacters,
    staleTime: Infinity,
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
    <main className="flex items-center justify-center w-full">
      <section className="flex flex-col gap-8 p-4 pt-10">
        {/*   <h1 className="text-3xl font-bold text-zinc-950 uppercase">
          Characters
        </h1> */}
        {isLoading ? (
          <ul className="grid grid-cols-4 gap-4 w-full">
            {Array.from({ length: 20 }).map((_, index) => (
              <div
                key={index}
                className="w-72 h-64 rounded-lg bg-muted animate-pulse blur-sm"
              />
            ))}
          </ul>
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
                <h2>{character.name}</h2>
                <p>{character.species}</p>
              </li>
            ))}
          </ul>
        )}

        <Paginator
          totalPages={data?.info.pages || 1}
          onPageChange={onPageChange}
          page={page}
        />
      </section>
    </main>
  );
}
