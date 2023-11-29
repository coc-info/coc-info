import { ClanWarAttackOnApi } from './ClanWarAttackOnApi';

export interface ClanWarMemberOnApi {
  tag: string;
  name: string;
  townhallLevel: number;
  mapPosition: number;
  opponentAttacks: number;
  attacks?: ClanWarAttackOnApi[];
  bestOpponentAttack?: ClanWarAttackOnApi;
}
