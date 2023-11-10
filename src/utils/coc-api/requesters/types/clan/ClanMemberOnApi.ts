import { BuilderBaseLeagueOnApi, LeagueOnApi, PlayerHouseElementOnApi } from '..';

export interface ClanMemberOnApi {
  tag: string;
  name: string;
  role: 'notMember' | 'member' | 'leader' | 'admin' | 'coLeader';
  expLevel: number;
  league: LeagueOnApi;
  trophies: number;
  builderBaseTrophies: number;
  versusTrophies: number;
  clanRank: number;
  previousClanRank: number;
  donations: number;
  donationsReceived: number;
  playerHouse: PlayerHouseElementOnApi;
  builderBaseLeague: BuilderBaseLeagueOnApi;
}
