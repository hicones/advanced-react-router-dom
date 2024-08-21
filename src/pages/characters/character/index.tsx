import { CharacterProps } from "@/types/characters";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { TbArrowBack, TbLocation } from "react-icons/tb";
import { FaLocationArrow } from "react-icons/fa";

export function CharacterPage() {
  const { state }: { state: CharacterProps } = useLocation();

  const navigate = useNavigate();

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
      <section className="flex flex-col gap-8">
        <h1 className="text-3xl font-bold text-zinc-950 uppercase">
          {state?.name}
        </h1>
        <div className="flex flex-col items-center justify-center gap-2 p-4 rounded border-2 border-muted shadow-sm animate-fade-in">
          <div className="flex lg:flex-row flex-col gap-4 w-full items-center">
            <img
              src={state?.image}
              alt={state?.name}
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
                  {state?.name}
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
                  {state?.species}
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
                  {state?.gender}
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
                  className="font-semibold text-lg"
                >
                  {state?.status}
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
                  {state?.type}
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
                  to={`/locations/${state?.location.url.replace(
                    "https://rickandmortyapi.com/api/location/",
                    "",
                  )}`}
                  id="location"
                  className="font-semibold text-lg hover:text-teal-400 transition flex items-center gap-2"
                >
                  {state?.location.name}
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
                  {state?.origin.name}
                </p>
              </fieldset>
            </div>
          </div>

          <h3 className="text-lg font-bold">Episodes</h3>
          <ul className="xl:grid grid-cols-10 gap-4 flex flex-wrap justify-center">
            {state?.episode.map((episode) => (
              <Link
                to={`/episodes/${episode.replace(
                  "https://rickandmortyapi.com/api/episode/",
                  "",
                )}`}
                key={episode}
                className="min-w-28 py-4 text-center px-10 rounded-lg bg-teal-400 text-muted hover:scale-105 transition duration-300 cursor-pointer"
              >
                {episode.replace(
                  "https://rickandmortyapi.com/api/episode/",
                  "",
                )}
              </Link>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
