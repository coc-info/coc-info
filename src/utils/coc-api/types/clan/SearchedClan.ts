import { WarLeague } from '../leagues/WarLeague';
import { TypeChecker } from '../TypeChecker';
import { WarFrequency } from '../enums/WarFrequency';
import { CapitalLeague } from '../leagues/CapitalLeague';
import { Location } from '../location/Location';
import { Label } from '../etc/Label';
import { Language } from '../location/Language';

export interface SearchedClan {
  tag: string;
  name: string;
  type: 'open' | 'inviteOnly' | 'closed';

  location?: Location;
  isFamilyFriendly: boolean;
  badgeUrls: {
    small: string;
    medium: string;
    large: string;
  };
  clanLevel: number;
  clanPoints: number;
  clanBuilderBasePoints: number;
  clanVersusPoints: number;
  clanCapitalPoints: number;
  capitalLeague: CapitalLeague;
  requiredTrophies: number;
  warFrequency: WarFrequency;
  warWinStreak: number;
  warWins: number;

  //isWarLogPubilic === true ? number : undefined
  warTies?: number;

  //isWarLogPubilic === true ? number : undefined
  warLosses?: number;
  isWarLogPublic: boolean;
  warLeague: WarLeague;
  members: number;
  labels: Label[];
  requiredBuilderBaseTrophies: number;
  requiredVersusTrophies: number;
  requiredTownhallLevel: number;
  chatLanguage: Language;
}

export const checkSearchedClan: TypeChecker<SearchedClan> = (data): data is SearchedClan => {
  if (
    data &&
    typeof data.tag === 'string' &&
    typeof data.name === 'string' &&
    ['open', 'inviteOnly', 'closed'].includes(data.type)
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
