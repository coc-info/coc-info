import { checkClanRankingList } from '@/utils/coc-api/types/list/ClanRankingList';
import { createQueryString } from '../../utils/createQueryString';
import { createRequester } from '../createRequester';

const LOCATION_ID_OF_KR = 32000216;

export interface GetClanRankingListParams {
  locationId?: number;
  limit?: number;
  after?: string;
  befor?: string;
}

export const getClanRankingList = createRequester(async (fetchFromCocApi, params: GetClanRankingListParams) => {
  if (params.locationId === undefined) params.locationId = LOCATION_ID_OF_KR;

  const queries = params === undefined ? '' : createQueryString(params);
  const PATH = `/locations/${LOCATION_ID_OF_KR}/rankings/clans?${queries}`;

  const response = await fetchFromCocApi(PATH, { next: { revalidate: 5 } });
  const data = await response.json();

  return { response, data };
}, checkClanRankingList);
