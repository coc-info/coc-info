import { checkClanWar } from '@/utils/coc-api/types/clan/war/ClanWar';
import { createRequester } from '../createRequester';

export interface GetCurrentWarParams {
  tag: string;
}

export const getCurrentWar = createRequester(async (fetchFromCocApi, { tag }: GetCurrentWarParams) => {
  const PATH = `/clans/${encodeURIComponent(tag)}/currentwar`;

  const response = await fetchFromCocApi(PATH, { next: { revalidate: 5 } });
  const data = await response.json();

  return { response, data };
}, checkClanWar);
