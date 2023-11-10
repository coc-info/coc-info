import { WarClan } from './WarClan';

/*클랜전 정보*/
export interface ClanWar {
  state: 'notInWar' | 'inWar' | 'preparation' | 'warEnded';
  teamSize: number;
  attacksPerMember: number;
  endTime: string;
  preparationStartTime: string;
  startTime: string;
  clan: WarClan;
  opponent: WarClan;
}
