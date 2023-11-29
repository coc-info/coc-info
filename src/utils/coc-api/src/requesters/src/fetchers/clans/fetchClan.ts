import { Fetcher } from '../../createRequester';

export interface FetchClanParams {
  tag: string;
}

export const fetchClan: Fetcher<FetchClanParams> = async (fetchToApi, { tag }) => {
  const PATH = `/clans/${encodeURIComponent(tag)}`;

  const res = await fetchToApi(PATH, { next: { revalidate: 5 } });
  const data = await res.json();

  return { res, data };
};
