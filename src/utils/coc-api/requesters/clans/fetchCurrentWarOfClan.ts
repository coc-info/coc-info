import { fetchToCocApi } from '../fetchToCocApi';

export interface ClanWarAttack {
  order: number;
  attackerTag: string;
  defenderTag: string;
  stars: number;
  destructionPercentage: number;
  duration: number;
}

export interface ClanWarMemberOnApi {
  tag: string;
  name: string;
  mapPosition: number;
  townhallLevel: number;
  opponentAttacks: number;
  bestOpponentAttack?: ClanWarAttack;
  attacks: ClanWarAttack[];
}

export interface WarClanOnApi {
  tag: string;
  name: string;
  badgeUrls: {
    small: string;
    medium: string;
    large: string;
  };
  clanLevel: number;
  attacks: number;
  stars: number;
  expEarned: number;
  destructionPercentage: number;
  members: ClanWarMemberOnApi[];
}

export interface ClanWarOnApi {
  state: 'notInWar' | 'preparation' | 'inWar' | 'warEnded';
  teamSize: number;
  attacksPerMember: number;

  /* yyyymmddThhmmss.000Z 형식 
    예: 20231031T024813.000Z = 2023년 10월 31일 2시 48분 13초
    GMT+9이 적용되지 않음.
  */
  preparationStartTime: string;
  startTime: string;
  endTime: string;
  clan: WarClanOnApi;
  opponent: WarClanOnApi;
}

export async function fetchCurrentWarOfClan(clanTag: string): Promise<[Response, ClanWarOnApi]> {
  try {
    const res = await fetchToCocApi(`/clans/${encodeURIComponent(clanTag)}/currentwar`, { next: { revalidate: 5 } });
    if (res.status !== 200) throw new Error(res.status + res.statusText);
    const currentWarData = await res.json();

    return [res, currentWarData];
  } catch (e) {
    throw e;
  }
}
