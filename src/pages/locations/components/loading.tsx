import { Skeleton } from "@/components/ui/skeleton";

export const LoadingLocationList = () => {
  return (
    <section className="w-full max-w-4xl grid grid-cols-3 gap-6">
      {Array.from({ length: 20 }).map((_, index) => (
        <Skeleton
          className="w-full h-32 rounded-lg"
          key={index}
        />
      ))}
    </section>
  );
};
