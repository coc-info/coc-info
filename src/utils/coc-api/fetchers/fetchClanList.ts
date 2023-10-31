import { fetchToCocApi } from '..';
import { createQueryString } from '../utils/createQueryString';

import type { ClanOnApi } from './types/ClanOnApi';

interface ClanListFetchingResult {
  items: ClanOnApi[];
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

export async function fetchClanList(options: Options): Promise<[Response, ClanListFetchingResult]> {
  const queries = createQueryString(options);

  const path = `/clans?${queries}`;

  try {
    const res = await fetchToCocApi(path);
    const clanSearchResult = await res.json();

    if (res.status !== 200) throw new Error(`${res.status} ${res.statusText}`);

    return [res, clanSearchResult];
  } catch (e) {
    throw e;
  }
}
