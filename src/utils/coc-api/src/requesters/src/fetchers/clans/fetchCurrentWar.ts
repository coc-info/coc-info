import { Fetcher } from '../../createRequester';

export interface FetchCurrentWarParams {
  clanTag: string;
}

export const fetchCurrentWar: Fetcher<FetchCurrentWarParams> = async (fetchToApi, { clanTag }) => {
  const PATH = `/clans/${encodeURIComponent(clanTag)}/currentwar`;
  const res = await fetchToApi(PATH, { next: { revalidate: 5 } });
  const data = await res.json();

  return { res, data };
};
