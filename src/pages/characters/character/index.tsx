import { CharacterProps } from "@/types/characters";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { TbArrowBack, TbLocation } from "react-icons/tb";
import { useQuery } from "@tanstack/react-query";
import { getCharacterById } from "@/services/requests/queries/get-character-by-id";
import { LoadingCharacter } from "./components/loading";
import { Dot } from "@/components/ui/dot";

export function CharacterPage() {
  const { state }: { state: CharacterProps } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["episodes", id || "1"],
    queryFn: getCharacterById,
    enabled: !state,
  });

  const character = state || data;

  return (
    <main className="flex xl:flex-row flex-col justify-center w-full lg:py-8 p-4 gap-8 flex-1">
      <button
        className="flex self-start items-center gap-4 py-4 px-10 rounded-lg border-2 border-muted shadow-sm cursor-pointer transition duration-300 animate-fade font-medium group hover:border-teal-400"
        onClick={() => navigate(-1)}
      >
        <TbArrowBack
          size={20}
          className="group-hover:scale-105"
        />
        Back
      </button>
      {isLoading ? (
        <LoadingCharacter />
      ) : (
        <section className="flex flex-col gap-8">
          <h1 className="text-3xl font-bold text-foreground uppercase">
            {character?.name}
          </h1>
          <div className="flex flex-col items-center justify-center gap-2 p-4 rounded border-2 border-muted shadow-sm animate-fade-in">
            <div className="flex lg:flex-row flex-col gap-4 w-full lg:items-center">
              <img
                src={character?.image}
                alt={character?.name}
                className="rounded max-w-sm"
              />
              <div className="flex flex-col gap-2">
                <fieldset className="flex items-center gap-2">
                  <label
                    htmlFor="name"
                    className="text-muted-foreground"
                  >
                    Name:
                  </label>
                  <h2
                    id="name"
                    className="font-semibold text-lg"
                  >
                    {character?.name}
                  </h2>
                </fieldset>
                <fieldset className="flex items-center gap-2">
                  <label
                    htmlFor="species"
                    className="text-muted-foreground"
                  >
                    Species:
                  </label>
                  <p
                    id="species"
                    className="font-semibold text-lg"
                  >
                    {character?.species}
                  </p>
                </fieldset>

                <fieldset className="flex items-center gap-2">
                  <label
                    htmlFor="location"
                    className="text-muted-foreground"
                  >
                    Gender:
                  </label>
                  <p
                    id="location"
                    className="font-semibold text-lg"
                  >
                    {character?.gender}
                  </p>
                </fieldset>

                <fieldset className="flex items-center gap-2">
                  <label
                    htmlFor="status"
                    className="text-muted-foreground"
                  >
                    Status:
                  </label>
                  <p
                    id="status"
                    className="font-semibold text-lg flex items-center gap-2"
                  >
                    <Dot
                      className={
                        character?.status === "Alive"
                          ? "bg-green-500"
                          : character?.status === "Dead"
                            ? "bg-red-500"
                            : "bg-yellow-500"
                      }
                    />
                    {character?.status}
                  </p>
                </fieldset>

                <fieldset className="flex items-center gap-2">
                  <label
                    htmlFor="location"
                    className="text-muted-foreground"
                  >
                    Type:
                  </label>
                  <p
                    id="location"
                    className="font-semibold text-lg"
                  >
                    {character?.type}
                  </p>
                </fieldset>

                <fieldset className="flex items-center gap-2">
                  <label
                    htmlFor="location"
                    className="text-muted-foreground"
                  >
                    Location:
                  </label>
                  <Link
                    to={`/locations/${character?.location.url.replace(
                      "https://rickandmortyapi.com/api/location/",
                      "",
                    )}`}
                    id="location"
                    className="font-semibold text-lg hover:text-teal-400 transition flex items-center gap-2"
                  >
                    {character?.location.name}
                    <TbLocation />
                  </Link>
                </fieldset>

                <fieldset className="flex items-center gap-2">
                  <label
                    htmlFor="origin"
                    className="text-muted-foreground"
                  >
                    Origin:
                  </label>
                  <p
                    id="origin"
                    className="font-semibold text-lg"
                  >
                    {character?.origin.name}
                  </p>
                </fieldset>
              </div>
            </div>

            <h3 className="text-lg font-bold">Appears in</h3>
            <ul className="grid lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8 gap-4 md:grid-cols-3 justify-center">
              {character?.episode.map((episode) => (
                <Link
                  to={`/episodes/${episode.replace(
                    "https://rickandmortyapi.com/api/episode/",
                    "",
                  )}`}
                  key={episode}
                  className="w-full py-4 px-10 rounded-lg bg-teal-400 text-muted hover:scale-105 transition duration-300 cursor-pointer text-semibold font-sora whitespace-nowrap text-center"
                >
                  Episode{" "}
                  {episode.replace(
                    "https://rickandmortyapi.com/api/episode/",
                    "",
                  )}
                </Link>
              ))}
              {character?.episode?.length === 0 && (
                <p className="text-muted-foreground">No episodes found</p>
              )}
            </ul>
          </div>
        </section>
      )}
    </main>
  );
}
