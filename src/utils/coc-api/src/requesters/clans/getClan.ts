import { createRequester } from '../createRequester';
import { checkClan } from '@/utils/coc-api/types/clan/Clan';

export interface GetClanParams {
  tag: string;
}

export const getClan = createRequester(async (fetchFromCocApi, { tag }: GetClanParams) => {
  const PATH = `/clans/${encodeURIComponent(tag)}`;

  const response = await fetchFromCocApi(PATH, { next: { revalidate: 5 } });
  const data = await response.json();

  return { response, data };
}, checkClan);
