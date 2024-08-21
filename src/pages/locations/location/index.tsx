import { useQuery } from "@tanstack/react-query";
import { TbArrowBack } from "react-icons/tb";
import { useParams, useNavigate, Link, useLocation } from "react-router-dom";
import { LoadingLocation } from "./components/loading";
import { LocationProps } from "@/types/locations";
import { getLocationById } from "@/services/requests/queries/get-location-by-id";

export function LocationPage() {
  const { state }: { state: LocationProps } = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading } = useQuery({
    queryKey: ["episodes", id || "1"],
    queryFn: getLocationById,
    enabled: !state,
  });

  const location = state || data;

  return (
    <main className="flex xl:flex-row flex-col justify-center w-full py-8 px-4 gap-8 flex-1 xl:pt-20">
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
        <LoadingLocation />
      ) : (
        <section className="flex flex-col gap-8 max-w-5xl w-full">
          <h1 className="text-3xl font-bold text-foreground uppercase">
            {location?.name}
          </h1>
          <div className="flex flex-col lg:items-center justify-center gap-2 p-4 rounded border-2 border-muted shadow-sm animate-fade-in">
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
                  {location?.name}
                </p>
              </fieldset>

              <fieldset className="flex items-center gap-2">
                <label
                  htmlFor="origin"
                  className="text-muted-foreground"
                >
                  Dimension:
                </label>
                <p
                  id="origin"
                  className="font-semibold text-lg"
                >
                  {location?.dimension}
                </p>
              </fieldset>

              <fieldset className="flex items-center gap-2">
                <label
                  htmlFor="status"
                  className="text-muted-foreground"
                >
                  Type:
                </label>
                <p
                  id="status"
                  className="font-semibold text-lg"
                >
                  {location?.type}
                </p>
              </fieldset>

              <h3 className="text-lg font-bold">Characters</h3>
              <ul className="xl:grid grid-cols-7 gap-4 flex flex-wrap justify-center">
                {location?.residents?.map((residents) => (
                  <Link
                    to={`/characters/${residents.replace(
                      "https://rickandmortyapi.com/api/character/",
                      "",
                    )}`}
                    className="hover:scale-105 transition duration-300 rounded-full border-2 hover:border-teal-500 animate-fade-in"
                    key={residents}
                  >
                    <img
                      src={`https://rickandmortyapi.com/api/character/avatar/${residents.replace(
                        "https://rickandmortyapi.com/api/character/",
                        "",
                      )}.jpeg`}
                      className="w-32 h-32 rounded-full"
                      alt={residents}
                    />
                  </Link>
                ))}
                {location?.residents?.length === 0 && (
                  <p className="text-muted-foreground">No residents found</p>
                )}
              </ul>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
