import { LocationOnApi } from '..';

export interface ClanRankingOnApi {
  tag: string;
  name: string;
  location?: LocationOnApi;
  badgeUrls: { small: string; medium: string; large: string };
  clanLevel: number;
  members: number;
  clanPoints: number;
  rank: number;
  previousRank: number;
}
