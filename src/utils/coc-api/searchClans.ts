import { fetchToCocApi } from '.';
import { createQueryString } from './utils';

interface SearchedClansList {
  items: {
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
  }[];
}

interface Options {
  name: string;
  limit?: number;
  after?: string;
}

export async function searchClans(options: Options): Promise<[Response, SearchedClansList]> {
  const queries = createQueryString(options);

  const path = `/clans?${queries}`;

  try {
    const res = await fetchToCocApi(path);
    const data = await res.json();

    return [res, data];
  } catch (e) {
    console.error(e);
    throw e;
  }
}
