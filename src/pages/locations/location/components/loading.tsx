import { Skeleton } from "@/components/ui/skeleton";

export const LoadingLocation = () => {
  return (
    <section className="flex flex-col w-full gap-8 max-w-7xl">
      <Skeleton className="w-1/3 h-12 rounded-lg" />
      <div className="flex flex-col justify-center gap-2 p-4 rounded border-2 border-muted shadow-sm animate-fade-in">
        <Skeleton className="w-2/3 h-12 rounded-lg" />
        <Skeleton className="w-2/3 h-12 rounded-lg" />
        <Skeleton className="w-2/3 h-12 rounded-lg" />
        <Skeleton className="w-1/3 h-12 rounded-lg" />
        <Skeleton className="w-full h-96 rounded-lg" />
      </div>
    </section>
  );
};
