import { Skeleton } from "@/components/ui/skeleton";

export const LoadingCharactersList = () => {
  return (
    <ul className="w-full grid 2xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4 gap-6 animate-fade-in">
      {Array.from({ length: 20 }).map((_, index) => (
        <Skeleton
          className="w-full h-96 rounded-lg"
          key={index}
        />
      ))}
    </ul>
  );
};
