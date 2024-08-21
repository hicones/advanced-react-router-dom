import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatEpisode(episodeCode: string): string {
  const match = episodeCode?.match(/^S(\d{2})E(\d{2})$/);

  if (match) {
    const season = parseInt(match[1], 10);
    const episode = parseInt(match[2], 10);

    return `Season ${season}, Episode ${episode}`;
  } else {
    return "Invalid episode format";
  }
}
