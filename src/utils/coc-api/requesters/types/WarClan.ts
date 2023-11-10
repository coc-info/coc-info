import { WarMember } from './WarMember';

export interface WarClan {
  tag: string;
  name: string;
  clanLevel: number;
  location?: {
    id: number;
    name: string;
    isCountry: boolean;
    countryCode: string;
  };
  badgeUrls: {
    small: string;
    medium: string;
    large: string;
  };

  attacks: number;
  stars: number;
  destructionPercentage: number;
  expEarned: number;

  members: WarMember[];
}
