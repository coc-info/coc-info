import { fetchToCocApi } from '../fetchToCocApi';
import { createQueryString } from '../../utils/createQueryString';

import { SearchedClanOnApi } from '../types';
import { ResultFetchedFromApi } from '../types/ResultFetchedFromApi';

interface ResultOfFetchingClans {
  items: SearchedClanOnApi[];
  paging: {
    cursors: {
      before?: string;
      after?: string;
    };
  };
}

interface Options {
  name: string;
  limit?: number;
  after?: string;
}

export async function fetchClans(options: Options): Promise<ResultFetchedFromApi<ResultOfFetchingClans>> {
  const queries = createQueryString(options);

  const PATH = `/clans?${queries}`;

  const res = await fetchToCocApi(PATH, { next: { revalidate: 5 } });
  const resultOfFetchingClans = await res.json();

  return { response: res, data: resultOfFetchingClans };
}
