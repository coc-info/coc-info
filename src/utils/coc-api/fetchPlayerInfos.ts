import { fetchPlayerInfo } from './fetchPlayerInfo';

export async function fetchPlayerInfos(tagList: string[]) {
  try {
    const resList = await Promise.all(tagList.map((tag) => fetchPlayerInfo(tag)));
    return resList;
  } catch (e) {
    throw e;
  }
}
