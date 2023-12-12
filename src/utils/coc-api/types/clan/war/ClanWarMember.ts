import { ClanWarAttack } from './ClanWarAttack';

export interface ClanWarMember {
  tag: string;
  name: string;
  townhallLevel: number;
  mapPosition: number;
  opponentAttacks: number;
  attacks?: ClanWarAttack[];
  bestOpponentAttack?: ClanWarAttack;
}
