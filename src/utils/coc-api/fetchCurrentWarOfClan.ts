import { fetchToCocApi } from '.';

interface ClanData {
  tag: string;
  name: string;
  badgeUrls: {
    small: string;
    medium: string;
    large: string;
  };
  attacks: number;
  stars: number;
  destructionPercentage: number;
  location: string;
  members: [];
}

interface CurrentWarData {
  state: 'notInWar' | 'preparation' | 'inWar';
  teamSize: number;
  attacksPerMember: number;
  /* yyyymmddThhmmss.000Z 형식 
    예: 20231031T024813.000Z = 2023년 10월 31일 2시 48분 13초
    한국시간 계산하기 위해 GMT+9 해야함.
  */
  preparationStartTime: string;
  startTime: string;
  endTime: string;
  clan: ClanData;
  opponent: ClanData;
}

export async function fetchCurrentWarOfClan(clanTag: string): Promise<[Response, CurrentWarData]> {
  try {
    const res = await fetchToCocApi(`/clans/${encodeURIComponent(clanTag)}/currentwar`);
    const currentWarData = await res.json();

    return [res, currentWarData];
  } catch (e) {
    throw e;
  }
}
