import { fetchToCocApi } from '../fetchToCocApi';
import { createQueryString } from '../../utils/createQueryString';
import { ResultFetchedFromApi } from '../types/ResultFetchedFromApi';
import { ClanRankingOnApi } from '../types';

const LOCATION_ID_OF_KR = '32000216';

interface ResultOfFetchingClanRankings {
  items: ClanRankingOnApi[];
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

export async function fetchClanRankings(
  options?: Options
): Promise<ResultFetchedFromApi<ResultOfFetchingClanRankings>> {
  const queries = options === undefined ? '' : createQueryString(options);
  const PATH = `/locations/${LOCATION_ID_OF_KR}/rankings/clans?${queries}`;

  const response = await fetchToCocApi(PATH, { next: { revalidate: 5 } });
  const data = await response.json();

  return { response, data };
}
