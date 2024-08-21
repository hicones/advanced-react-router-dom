export interface EpisodesResponseModel {
  info: Info;
  results: EpisodeProps[];
}

export interface Info {
  count: number;
  pages: number;
  next: string;
  prev: any;
}

export interface EpisodeProps {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}
