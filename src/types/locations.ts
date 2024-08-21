export interface LocationsResponseModel {
  info: InfoLocations;
  results: LocationProps[];
}

export interface InfoLocations {
  count: number;
  pages: number;
  next: string;
  prev: any;
}

export interface LocationProps {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}
