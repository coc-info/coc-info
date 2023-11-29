import { WarClanOnApi } from '../..';

interface ClanWarBaseOnApi {
  state: 'preparation' | 'inWar' | 'warEnded' | 'notInWar';
  clan: {};
  opponent: {};
}

export interface ClanWarOnApi extends ClanWarBaseOnApi {
  state: 'preparation' | 'inWar' | 'warEnded';
  teamSize: number;
  attacksPerMember: number;

  /* yyyymmddThhmmss.000Z 형식 
    예: 20231031T024813.000Z = 2023년 10월 31일 2시 48분 13초
    주의: GMT+9이 적용되어있지 않음.
  */
  preparationStartTime: string;
  startTime: string;
  endTime: string;

  clan: WarClanOnApi;
  opponent: WarClanOnApi;
}

export interface ClanWarNotInOnApi extends ClanWarBaseOnApi {
  state: 'notInWar';
}
