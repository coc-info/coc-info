import { Fetcher } from '../../createRequester';
import { createQueryString } from '@/utils/coc-api/utils/createQueryString';

export interface FetchSearchedClanListParams {
  name: string;
  limit?: number;
  after?: string;
}

export const fetchSearchedClanList: Fetcher<FetchSearchedClanListParams> = async (fetchToApi, params) => {
  const queries = createQueryString(params);
  const PATH = `/clans?${queries}`;

  const res = await fetchToApi(PATH, { next: { revalidate: 5 } });
  const data = await res.json();

  return { res, data };
};
