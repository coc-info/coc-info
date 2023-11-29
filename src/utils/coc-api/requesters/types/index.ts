// clan
import { ClanOnApi } from './clan/ClanOnApi';
import { ClanMemberOnApi } from './clan/ClanMemberOnApi';
import { SearchedClanOnApi } from './clan/SearchedClanOnApi';
import { ClanRankingOnApi } from './clan/ClanRankingOnApi';

// clan/capital
import { ClanCapitalOnApi } from './clan/capital/ClanCapitalOnApi';
import { ClanDistrictDataOnApi } from './clan/capital/ClanDistrictDataOnApi';
import { PlayerHouseOnApi } from './clan/capital/PlayerHouseOnApi';
import { PlayerHouseElementOnApi } from './clan/capital/PlayerHouseElementOnApi';

// clan/war
import { ClanWarOnApi, ClanWarNotInOnApi } from './clan/war/ClanWarOnApi';
import { WarClanOnApi } from './clan/war/WarClanOnApi';
import { ClanWarMemberOnApi } from './clan/war/ClanWarMemberOnApi';
import { ClanWarAttackOnApi } from './clan/war/ClanWarAttackOnApi';

// leagues
import { LeagueOnApi } from './leagues/LeagueOnApi';
import { BuilderBaseLeagueOnApi } from './leagues/BuilderBaseLeagueOnApi';
import { WarLeagueOnApi } from './leagues/WarLeagueOnApi';
import { CapitalLeagueOnApi } from './leagues/CapitalLeagueOnApi';

//enums
import { WarFrequency } from './enums/WarFrequency';

// etc
import { LocationOnApi } from './LocationOnApi';
import { LabelOnApi } from './LabelOnApi';
import { LanguageOnApi } from './LanguageOnApi';

export type {
  // clan
  ClanOnApi,
  ClanMemberOnApi,
  SearchedClanOnApi,
  ClanRankingOnApi,

  // clan/capital
  ClanCapitalOnApi,
  ClanDistrictDataOnApi,
  PlayerHouseOnApi,
  PlayerHouseElementOnApi,

  // clan/war
  ClanWarOnApi,
  ClanWarNotInOnApi,
  WarClanOnApi,
  ClanWarMemberOnApi,
  ClanWarAttackOnApi,

  // leagues
  LeagueOnApi,
  WarLeagueOnApi,
  BuilderBaseLeagueOnApi,
  CapitalLeagueOnApi,

  // enums
  WarFrequency,

  // etc
  LanguageOnApi,
  LocationOnApi,
  LabelOnApi,
};
