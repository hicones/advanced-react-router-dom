import { cn } from "@/lib/utils";

export interface DotProps {
  className?: string;
}

export function Dot({ className }: DotProps) {
  return (
    <div className={cn("w-2 h-2 rounded-full bg-foreground", className)} />
  );
}
