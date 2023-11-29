import { SearchedClan } from '@/utils/coc-api/types';
import { TypeChecker } from '../../createRequester';

export const checkSearchedClan: TypeChecker<SearchedClan> = (data): data is SearchedClan => {
  if (
    data &&
    typeof data.tag === 'string' &&
    typeof data.name === 'string' &&
    ['opon', 'inviteOnly', 'closed'].includes(data.type)
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
  // labels: LabelOnApi[];
  // requiredBuilderBaseTrophies: number;
  // requiredVersusTrophies: number;
  // requiredTownhallLevel: number;
  // chatLanguage: LanguageOnApi;
  return false;
};
