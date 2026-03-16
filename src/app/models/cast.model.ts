export interface CastMember {
  person: {
    id: number;
    name: string;
    birthday: string;
    image: { medium: string; original: string } | null;
  };
  character: {
    id: number;
    name: string;
    image: { medium: string; original: string } | null;
  };
}
