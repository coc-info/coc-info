import { fetchClanInfo } from '../requesters';
import { Clan } from '../types';
import { ApiResult } from '../types/ApiResult';

export async function getClanInfo(tag: string): Promise<ApiResult<Clan>> {
  try {
    const { response, data } = await fetchClanInfo(tag);
    return { response, data };
  } catch (e) {
    throw new Error();
  }
}
