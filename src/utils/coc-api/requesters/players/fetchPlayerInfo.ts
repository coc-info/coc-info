import { fetchToCocApi } from '../fetchToCocApi';

export interface PlayerInfo {
  tag: string;
  name: string;
  role: string;
  expLevel: number;
  league?: {
    id: number;
    name: string;
    iconUrls: {
      tiny: string;
      small: string;
      medium: string;
    };
  };
  trophies: number;
  donations: number;
  donationsReceived: number;
  townHallLevel: number;
}

export async function fetchPlayerInfo(tag: string): Promise<[Response, PlayerInfo]> {
  try {
    const res = await fetchToCocApi(`/players/${encodeURIComponent(tag)}`, { next: { revalidate: 5 } });

    const playerInfo = await res.json();

    return [res, playerInfo];
  } catch (e) {
    console.error(e);
    throw e;
  }
}
