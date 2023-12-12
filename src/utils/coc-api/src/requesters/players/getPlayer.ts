import { checkPlayer } from '@/utils/coc-api/types/player/Player';
import { createRequester } from '../createRequester';

export interface GetPlayerParams {
  tag: string;
}

export const getPlayer = createRequester(async (fetchFromCocApi, { tag }: GetPlayerParams) => {
  const PATH = `/players/${encodeURIComponent(tag)}`;

  const response = await fetchFromCocApi(PATH, { next: { revalidate: 5 } });
  const data = await response.json();

  return { response, data };
}, checkPlayer);
