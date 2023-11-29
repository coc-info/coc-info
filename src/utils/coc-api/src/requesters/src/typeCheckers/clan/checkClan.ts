import { Clan } from '@/utils/coc-api/types';
import { TypeChecker } from '../../createRequester';

export const checkClan: TypeChecker<Clan> = (data): data is Clan => {
  if (
    data &&
    typeof data.tag === 'string' &&
    typeof data.name === 'string' &&
    ['opon', 'inviteOnly', 'closed'].includes(data.type) &&
    typeof data.description === 'string'
  ) {
    return true;
  }

  // location?: LocationOnApi;
  // isFamilyFriendly: boolean;
  // badgeUrls: {
  //   small: string;
  //   medium: string;
  //   large: string;
  // };
  // clanLevel: number;
  // clanPoints: number;
  // clanBuilderBasePoints: number;
  // clanVersusPoints: number;
  // clanCapitalPoints: number;
  // capitalLeague: CapitalLeagueOnApi;
  // requiredTrophies: number;
  // warFrequency: WarFrequency;
  // warWinStreak: number;
  // warWins: number;

  // //isWarLogPubilic === true ? number : undefined
  // warTies?: number;

  // //isWarLogPubilic === true ? number : undefined
  // warLosses?: number;
  // isWarLogPublic: boolean;
  // warLeague: WarLeagueOnApi;
  // members: number;
  // memberList: ClanMemberOnApi[];
  // labels: LabelOnApi[];
  // requiredBuilderBaseTrophies: number;
  // requiredVersusTrophies: number;
  // requiredTownhallLevel: number;
  // clanCapital: ClanCapitalOnApi;
  // chatLanguage: LanguageOnApi;
  return false;
};
