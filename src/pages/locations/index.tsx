import { Paginator } from "@/components/app";
import { getLocations } from "@/services/requests/queries/get-locations";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useSearchParams } from "react-router-dom";
import { LoadingLocationList } from "./components/loading";

export function LocationsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page") || "1");

  const { data, isLoading } = useQuery({
    queryKey: ["episodes", page.toString()],
    queryFn: getLocations,
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
    <main className="flex w-full flex-1 justify-center">
      <section className="flex flex-col gap-8 p-4 py-10 flex-1 justify-between items-center">
        {isLoading ? (
          <LoadingLocationList />
        ) : (
          <ul className="grid 2xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-4xl">
            {data?.results?.map((location) => (
              <li
                key={location.id}
                onClick={() =>
                  navigate(`/locations/${location.id}`, {
                    state: location,
                  })
                }
                className="text-center flex flex-col items-center justify-center gap-2 p-2 rounded border-2 border-muted shadow-sm cursor-pointer hover:border-teal-400 transition duration-300 animate-fade-in"
              >
                <h2 className="font-semibold text-lg">{location.name}</h2>
                <p className="text-muted-foreground">{location.type}</p>
              </li>
            ))}
          </ul>
        )}

        <Paginator
          totalPages={data?.info?.pages || 1}
          onPageChange={onPageChange}
          page={page}
        />
      </section>
    </main>
  );
}
