import { ClanRanking } from '@/utils/coc-api/types';
import { TypeChecker } from '../../createRequester';

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
