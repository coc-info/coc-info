import { WarClanInWarLog } from './WarClanInWarLog';

export interface ClanWarLogEntry {
  result: 'win' | 'tie' | 'lose' | null;
  endTime: string;
  teamSize: number;
  attacksPerMember: number;
  clan: WarClanInWarLog;
  opponent: WarClanInWarLog;
}
