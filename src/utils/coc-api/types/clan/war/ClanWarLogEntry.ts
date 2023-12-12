import { TypeChecker } from '../../TypeChecker';
import { WarClanInWarLog } from './WarClanInWarLog';

export interface ClanWarLogEntry {
  result: 'win' | 'tie' | 'lose' | null;
  endTime: string;
  teamSize: number;
  attacksPerMember: number;
  clan: WarClanInWarLog;
  opponent: WarClanInWarLog;
}

export const checkClanWarLogEntry: TypeChecker<ClanWarLogEntry> = (data): data is ClanWarLogEntry => {
  return true;
};
