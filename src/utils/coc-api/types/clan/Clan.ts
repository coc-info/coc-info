import { TypeChecker } from '../TypeChecker';
import { WarFrequency } from '../enums/WarFrequency';
import { CapitalLeague } from '../leagues/CapitalLeague';
import { Location } from '../location/Location';
import { ClanMember } from './ClanMember';
import { Label } from '../etc/Label';
import { ClanCapital } from './capital/ClanCapital';
import { Language } from '../location/Language';
import { WarLeague } from '../leagues/WarLeague';

export interface Clan {
  tag: string;
  name: string;
  type: 'open' | 'inviteOnly' | 'closed';
  description: string;
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
  memberList: ClanMember[];
  labels: Label[];
  requiredBuilderBaseTrophies: number;
  requiredVersusTrophies: number;
  requiredTownhallLevel: number;
  clanCapital: ClanCapital;
  chatLanguage: Language;
}

export const checkClan: TypeChecker<Clan> = (data): data is Clan => {
  if (
    data &&
    typeof data.tag === 'string' &&
    typeof data.name === 'string' &&
    ['open', 'inviteOnly', 'closed'].includes(data.type) &&
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
