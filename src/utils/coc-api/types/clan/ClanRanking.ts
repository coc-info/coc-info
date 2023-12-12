import { TypeChecker } from '../TypeChecker';

export interface ClanRanking {
  tag: string;
  name: string;
  location: Location;
  badgeUrls: {
    small: string;
    large: string;
    medium: string;
  };
  clanLevel: number;
  members: number;
  clanPoints: number;
  rank: number;
  previousRank: number;
}

export const checkClanRanking: TypeChecker<ClanRanking> = (data): data is ClanRanking => {
  if (data && typeof data.tag === 'string' && typeof data.name === 'string') {
    return true;
  }

  // location?: LocationOnApi;
  // badgeUrls: { small: string; medium: string; large: string };
  // clanLevel: number;
  // members: number;
  // clanPoints: number;
  // rank: number;
  // previousRank: number;
  return false;
};
