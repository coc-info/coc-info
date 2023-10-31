import { fetchClanList } from '../fetchers/fetchClanList';
import { Clan } from './types/Clan';

interface ClansSearchingResult {
  items: Clan[];
  paging: {
    cursors: {
      after?: string;
    };
  };
}

interface Options {
  name: string;
  limit?: number;
  after?: string;
}

export async function searchClans(options: Options): Promise<ClansSearchingResult> {
  const [res, clanListFetchingResult] = await fetchClanList(options);
  return clanListFetchingResult;
}
