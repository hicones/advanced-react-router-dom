import { Paginator } from "@/components/app";
import { formatEpisode } from "@/lib/utils";
import { getEpisodes } from "@/services/requests/queries/get-episodes";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useSearchParams } from "react-router-dom";
import { LoadingEpisodeList } from "./components/loading";

export function EpisodesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page") || "1");

  const { data, isLoading } = useQuery({
    queryKey: ["episodes", page.toString()],
    queryFn: getEpisodes,
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
    <main className="flex w-full justify-center flex-1">
      <section className="flex flex-col gap-8 p-4 py-10 flex-1 justify-between items-center">
        {isLoading ? (
          <LoadingEpisodeList />
        ) : (
          <ul className="grid 2xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-4xl">
            {data?.results?.map((episode) => (
              <li
                key={episode.id}
                onClick={() =>
                  navigate(`/episodes/${episode.id}`, {
                    state: episode,
                  })
                }
                className="text-center flex flex-col items-center justify-center gap-2 p-2 rounded border-2 border-muted shadow-sm cursor-pointer hover:border-teal-400 transition duration-300 animate-fade-in"
              >
                <h2 className="font-semibold text-lg">{episode.name}</h2>
                <p className="text-muted-foreground">
                  {formatEpisode(episode?.episode)}
                </p>
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
