import { fetchToCocApi } from '../fetchToCocApi';
import { createQueryString } from '../../utils/createQueryString';

interface Options {
  limit?: number;
  after?: string;
}

interface WarLog {
  result: 'win' | 'tie' | 'lose' | null;
  endTime: string;
}

interface Data {
  items: WarLog[];
  paging: {
    cursors: {
      after?: string;
      before?: string;
    };
  };
}

export async function fetchClanWarLog(clanTag: string, options: Options = {}): Promise<[Response, Data]> {
  const queries = createQueryString(options);

  const res = await fetchToCocApi(`/clans/${encodeURIComponent(clanTag)}/warlog?${queries}`, {
    next: { revalidate: 5 },
  });
  const data = await res.json();

  return [res, data];
}
