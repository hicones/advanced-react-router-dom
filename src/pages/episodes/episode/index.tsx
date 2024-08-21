import { formatEpisode } from "@/lib/utils";
import { getEpisodeById } from "@/services/requests/queries/get-episode-by-id";
import { useQuery } from "@tanstack/react-query";
import { TbArrowBack } from "react-icons/tb";
import { useParams, useNavigate, Link, useLocation } from "react-router-dom";
import { LoadingEpisode } from "./components/loading";
import { EpisodeProps } from "@/types/episodes";

export function EpisodePage() {
  const { state }: { state: EpisodeProps } = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading } = useQuery({
    queryKey: ["episodes", id || "1"],
    queryFn: getEpisodeById,
    enabled: !state,
  });

  const episode = state || data;

  return (
    <main className="flex xl:flex-row flex-col items-center justify-center w-full py-8 px-4 gap-8">
      <button
        className="flex self-start items-center gap-4 py-4 px-10 rounded-lg border-2 border-muted shadow-sm cursor-pointer transition duration-300 animate-fade font-medium group hover:border-teal-400 xl:my-16"
        onClick={() => navigate(-1)}
      >
        <TbArrowBack
          size={20}
          className="group-hover:scale-105"
        />
        Back
      </button>
      {isLoading ? (
        <LoadingEpisode />
      ) : (
        <section className="flex flex-col gap-8">
          <h1 className="text-3xl font-bold text-zinc-950 uppercase">
            {episode?.name}
          </h1>
          <div className="flex flex-col items-center justify-center gap-2 p-4 rounded border-2 border-muted shadow-sm animate-fade-in">
            <div className="flex flex-col gap-2">
              <fieldset className="flex items-center gap-2">
                <label
                  htmlFor="status"
                  className="text-muted-foreground"
                >
                  Name:
                </label>
                <p
                  id="status"
                  className="font-semibold text-lg"
                >
                  {episode?.name}
                </p>
              </fieldset>

              <fieldset className="flex items-center gap-2">
                <label
                  htmlFor="location"
                  className="text-muted-foreground"
                >
                  Episode:
                </label>
                <p
                  id="location"
                  className="font-semibold text-lg"
                >
                  {formatEpisode(episode?.episode || "")}
                </p>
              </fieldset>

              <fieldset className="flex items-center gap-2">
                <label
                  htmlFor="origin"
                  className="text-muted-foreground"
                >
                  Air Date:
                </label>
                <p
                  id="origin"
                  className="font-semibold text-lg"
                >
                  {episode?.air_date}
                </p>
              </fieldset>
              <h3 className="text-lg font-bold">Characters</h3>
              <ul className="xl:grid grid-cols-7 gap-4 flex flex-wrap justify-center">
                {episode?.characters?.map((character) => (
                  <Link
                    to={`/characters/${character.replace(
                      "https://rickandmortyapi.com/api/character/",
                      "",
                    )}`}
                    className="hover:scale-105 transition duration-300 rounded-full border-2 hover:border-teal-500 animate-fade-in"
                    key={character}
                  >
                    <img
                      src={`https://rickandmortyapi.com/api/character/avatar/${character.replace(
                        "https://rickandmortyapi.com/api/character/",
                        "",
                      )}.jpeg`}
                      className="w-32 h-32 rounded-full"
                      alt={character}
                    />
                  </Link>
                ))}
                {episode?.characters?.length === 0 && (
                  <p className="text-muted-foreground">No characters found</p>
                )}
              </ul>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
