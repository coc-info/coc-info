import { createQueryString } from '@/utils/coc-api/utils/createQueryString';
import { Fetcher } from '../../createRequester';

export interface FetchClanWarLogParams {
  clanTag: string;
  limit?: number;
  after?: string;
}

export const fetchClanWarLog: Fetcher<FetchClanWarLogParams> = async (fetchToApi, { clanTag, limit, after }) => {
  const queries = createQueryString({ limit, after });

  const res = await fetchToApi(`/clans/${encodeURIComponent(clanTag)}/warlog?${queries}`, {
    next: { revalidate: 5 },
  });
  const data = await res.json();

  return { res, data };
};
