import {
  CapitalLeagueOnApi,
  LocationOnApi,
  WarLeagueOnApi,
  LabelOnApi,
  ClanCapitalOnApi,
  LanguageOnApi,
  ClanMemberOnApi,
  WarFrequency,
} from '..';

export interface ClanOnApi {
  tag: string;
  name: string;
  type: 'open' | 'inviteOnly' | 'closed';
  description: string;
  location?: LocationOnApi;
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
  capitalLeague: CapitalLeagueOnApi;
  requiredTrophies: number;
  warFrequency: WarFrequency;
  warWinStreak: number;
  warWins: number;

  //isWarLogPubilic === true ? number : undefined
  warTies?: number;

  //isWarLogPubilic === true ? number : undefined
  warLosses?: number;
  isWarLogPublic: boolean;
  warLeague: WarLeagueOnApi;
  members: number;
  memberList: ClanMemberOnApi[];
  labels: LabelOnApi[];
  requiredBuilderBaseTrophies: number;
  requiredVersusTrophies: number;
  requiredTownhallLevel: number;
  clanCapital: ClanCapitalOnApi;
  chatLanguage: LanguageOnApi;
}
