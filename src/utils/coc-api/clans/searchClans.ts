import { fetchClans } from '../requesters/clans/fetchClans';
import { SearchedClan } from '../types';
import { ApiResult } from '../types/ApiResult';

interface ResultOfSearchingClans {
  items: SearchedClan[];
  paging: {
    cursors: {
      after?: string;
      before?: string;
    };
  };
}

interface Options {
  name: string;
  limit?: number;
  after?: string;
}

export async function searchClans(options: Options): Promise<ApiResult<ResultOfSearchingClans>> {
  const { response, data: clanListFetchingResult } = await fetchClans(options);
  return { response, data: clanListFetchingResult };
}
