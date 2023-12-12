export interface League {
  name: string;
  id: number;
  iconUrls: {
    tiny: string;
    small: string;
    medium?: string;
  };
}
