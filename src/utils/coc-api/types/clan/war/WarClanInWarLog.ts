export interface WarClanInWarLog {
  tag: string;
  name: string;
  badgeUrls: {
    small: string;
    medium: string;
    large: string;
  };
  clanLevel: number;
  attacks: number;
  stars: number;
  destructionPercentage: number;
  expEarned: number;
}
