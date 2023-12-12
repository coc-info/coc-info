import { TypeChecker } from '../../TypeChecker';
import { WarClan } from './WarClan';

/*클랜전 정보*/
export interface ClanWar {
  state: 'preparation' | 'inWar' | 'notInWar';
  teamSize: number;
  attacksPerMember: number;
  preparationStartTime: string;
  startTime: string;
  endTime: string;
  clan: WarClan;
  opponent: WarClan;
}

export const checkClanWar: TypeChecker<ClanWar> = (data): data is ClanWar => {
  return true;
};
