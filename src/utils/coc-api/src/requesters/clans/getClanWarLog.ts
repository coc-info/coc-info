import { createQueryString } from '../../utils/createQueryString';
import { createRequester } from '../createRequester';
import { checkClanWarLog } from '@/utils/coc-api/types/list/ClanWarLog';

export interface GetClanWarLogParams {
  clanTag: string;
  limit?: number;
  after?: string;
}

export const getClanWarLog = createRequester(
  async (fetchFromCocApi, { clanTag, limit, after }: GetClanWarLogParams) => {
    const queries = createQueryString({ limit, after });

    const response = await fetchFromCocApi(`/clans/${encodeURIComponent(clanTag)}/warlog?${queries}`, {
      next: { revalidate: 5 },
    });
    const data = await response.json();

    return { response, data };
  },
  checkClanWarLog
);
