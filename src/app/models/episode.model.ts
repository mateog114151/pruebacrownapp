export interface Episode {
  id: number;
  name: string;
  season: number;
  number: number;
  airdate: string;
  summary: string;
  image: { medium: string; original: string } | null;
  rating: { average: number };
}
