import { fetchToCocApi } from '.';

interface PlayerInfo {
  townHallLevel: number;
}

export async function fetchPlayerInfo(tag: string): Promise<[Response, PlayerInfo]> {
  try {
    const res = await fetchToCocApi(`/players/${encodeURIComponent(tag)}`);

    const playerInfo = await res.json();

    return [res, playerInfo];
  } catch (e) {
    console.error(e);
    throw e;
  }
}
