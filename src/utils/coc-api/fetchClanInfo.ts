import { fetchToCocApi } from '.';
import { fetchPlayerInfos } from './fetchPlayerInfos';

interface ClanInfo {
  tag: string;
  name: string;
  type: 'open' | 'inviteOnly' | 'closed';
  location?: {
    id: number;
    name: string;
    isCountry: boolean;
    countryCode: string;
  };
  badgeUrls: {
    small: string;
    large: string;
    medium: string;
  };
  clanPoints: number;
  clanBuilderBasePoints: number;
  clanCapitalPoints: number;
  members: number;
  isWarLogPublic: boolean;
  warWinStreak: number;
  warWins: number;
  warTies: number;
  warLosses: number;
  memberList: ClanMember[];
  requiredTrophies: number;
  requiredBuilderBaseTrophies: number;
  requiredTownhallLevel: number;
  warLeague: {
    id: number;
    name: string;
  };
  labels: {
    id: number;
    name: string;
    iconUrls: {
      small: string;
      medium: string;
    };
  }[];
}

export interface ClanMember {
  tag: string;
  name: string;
  role: string;
  expLevel: number;
  league: {
    id: number;
    name: string;
    iconUrls: {
      tiny: string;
      small: string;
      medium: string;
    };
  };
  trophies: number;
  clanRank: number;
  donations: number;
  donationsReceived: number;

  // coc-api/players/[tag]에서 얻을 수 있는 속성
  townHallLevel: number;
}

export async function fetchClanInfo(tag: string): Promise<[Response, ClanInfo]> {
  try {
    const res = await fetchToCocApi(`/clans/${encodeURIComponent(tag)}`);
    const clanInfo = (await res.json()) as ClanInfo;

    const playerInfos = await fetchPlayerInfos(clanInfo.memberList.map((member) => member.tag));

    clanInfo.memberList.forEach((member, i) => {
      const [res, playerInfo] = playerInfos[i];

      member.townHallLevel = playerInfo.townHallLevel;
    });

    return [res, clanInfo];
  } catch (e) {
    throw e;
  }
}