import { fetchToCocApi } from '../fetchToCocApi';
import { ClanOnApi } from '../types';
import { ResultFetchedFromApi } from '../types/ResultFetchedFromApi';

/**
 * COC API의 /clans/{clanTag}에 요청을 보냅니다.
 */
export async function fetchClanInfo(tag: string): Promise<ResultFetchedFromApi<ClanOnApi>> {
  const PATH = `/clans/${encodeURIComponent(tag)}`;

  const res = await fetchToCocApi(PATH, { next: { revalidate: 5 } });
  const clanInfo = (await res.json()) as ClanOnApi;

  return { response: res, data: clanInfo };
}
