export interface Show {
  id: number;
  name: string;
  summary: string;
  status: string;
  premiered: string;
  rating: { average: number };
  genres: string[];
  image: { medium: string; original: string };
  network: { name: string };
  language: string;
}
