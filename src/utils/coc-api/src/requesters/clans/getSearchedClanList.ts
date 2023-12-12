import { checkSearchedClanList } from '@/utils/coc-api/types/list/SearchedClanList';
import { createQueryString } from '../../utils/createQueryString';
import { createRequester } from '../createRequester';

export interface GetSearchedClanListParams {
  name: string;
  limit?: number;
  after?: string;
  before?: string;
}

export const getSearchedClanList = createRequester(async (fetchToApi, params: GetSearchedClanListParams) => {
  const queries = createQueryString(params);
  const PATH = `/clans?${queries}`;

  const response = await fetchToApi(PATH, { next: { revalidate: 5 } });
  const data = await response.json();

  return { response, data };
}, checkSearchedClanList);
