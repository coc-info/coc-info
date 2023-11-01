import { fetchToCocApi } from '.';
import { createQueryString } from './utils/createQueryString';

const LOCATION_ID_OF_KR = '32000216';

interface Data {
  items: {
    tag: string;
    rank: number;
    clanLevel: number;
    badgeUrls: { small: string };
    name: string;
    members: number;
    clanPoints: number;
  }[];
}

interface Options {
  limit?: number;
  after?: string;
}

export async function fetchLeaderboardOfClans(options?: Options): Promise<[Response, Data]> {
  const queries = options === undefined ? '' : createQueryString(options);
  const path = `/locations/${LOCATION_ID_OF_KR}/rankings/clans?${queries}`;

  try {
    const res = await fetchToCocApi(path);
    const data = await res.json();
    if (res.status !== 200) throw new Error(`${res.status} ${res.statusText} api key: ${process.env.COC_API_KEY}`);
    return [res, data];
  } catch (e) {
    console.error(e);
    throw e;
  }
}
