import { fetchClanRankings } from '../requesters';
import { ClanRanking } from '../types';
import { ApiResult } from '../types/ApiResult';

interface ResultOfFetchingClanRankings {
  items: ClanRanking[];
  paging: {
    cursors: {
      after?: string;
      before?: string;
    };
  };
}

interface Options {
  limit?: number;
  after?: string;
}

export async function getClanRankings(options: Options): Promise<ApiResult<ResultOfFetchingClanRankings>> {
  const { response, data } = await fetchClanRankings(options);

  return { response, data };
}
