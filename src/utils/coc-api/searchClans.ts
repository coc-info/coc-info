import { fetchToCocApi } from '.';
import { createQueryString } from './utils/createQueryString';

export interface SearchedClanInfo {
  clanLevel: number;
  badgeUrls: {
    small: string;
    medium: string;
    large: string;
  };
  name: string;
  tag: string;
  members: number;
  location?: { name: string };
  labels: {
    name: string;
    iconUrls: {
      small: string;
      medium: string;
    };
  }[];
}
interface ClanSearchResult {
  items: SearchedClanInfo[];
}

interface Options {
  name: string;
  limit?: number;
  after?: string;
}

export async function searchClans(options: Options): Promise<[Response, ClanSearchResult]> {
  const queries = createQueryString(options);

  const path = `/clans?${queries}`;

  try {
    const res = await fetchToCocApi(path);
    const clanSearchResult = await res.json();

    return [res, clanSearchResult];
  } catch (e) {
    console.error(e);
    throw e;
  }
}
