import { createQueryString } from '@/utils/coc-api/utils/createQueryString';
import { Fetcher } from '../../createRequester';

const LOCATION_ID_OF_KR = '32000216';

export interface FetchClanRankingListParams {
  limit?: number;
  after?: string;
}

export const fetchClanRankingList: Fetcher<FetchClanRankingListParams> = async (fetchToApi, params) => {
  const queries = params === undefined ? '' : createQueryString(params);
  const PATH = `/locations/${LOCATION_ID_OF_KR}/rankings/clans?${queries}`;

  const res = await fetchToApi(PATH, { next: { revalidate: 5 } });
  const data = await res.json();

  return { res, data };
};
