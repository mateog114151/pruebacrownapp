export interface ShowImage {
  id: number;
  type: string;
  resolutions: {
    original: { url: string; width: number; height: number };
    medium?: { url: string; width: number; height: number };
  };
}
