import { BuilderBaseLeague } from '../leagues/BuilderBaseLeague';
import { League } from '../leagues/League';
import { PlayerHouseElement } from './capital/PlayerHouseElement';

export interface ClanMember {
  tag: string;
  name: string;
  role: 'notMember' | 'member' | 'leader' | 'admin' | 'coLeader';
  expLevel: number;
  league: League;
  trophies: number;
  builderBaseTrophies: number;
  versusTrophies: number;
  clanRank: number;
  previousClanRank: number;
  donations: number;
  donationsReceived: number;
  playerHouse: PlayerHouseElement;
  builderBaseLeague: BuilderBaseLeague;
}
