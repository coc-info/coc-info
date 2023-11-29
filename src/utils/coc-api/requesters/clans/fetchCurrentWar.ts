import { fetchToCocApi } from '../fetchToCocApi';
import { ResultFetchedFromApi } from '../types/ResultFetchedFromApi';
import { ClanWarNotInOnApi, ClanWarOnApi } from '../types';

export async function fetchCurrentWar(
  clanTag: string
): Promise<ResultFetchedFromApi<ClanWarOnApi | ClanWarNotInOnApi>> {
  const response = await fetchToCocApi(`/clans/${encodeURIComponent(clanTag)}/currentwar`, { next: { revalidate: 5 } });
  const data = await response.json();
  return { response, data };
}
