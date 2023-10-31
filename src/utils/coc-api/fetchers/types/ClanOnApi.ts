export interface ClanOnApi {
  clanLevel: number;
  badgeUrls: {
    small: string;
    medium: string;
    large: string;
  };
  name: string;
  tag: string;
  members: number;
  location?: { name: string };
  labels: {
    name: string;
    iconUrls: {
      small: string;
      medium: string;
    };
  }[];
}
