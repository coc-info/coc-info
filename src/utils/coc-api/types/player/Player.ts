import { TypeChecker } from '../TypeChecker';
import { PlayerHouse } from '../clan/capital/PlayerHouse';
import { Label } from '../etc/Label';
import { League } from '../leagues/League';

export interface Player {
  tag: string;
  name: string;
  townHallLevel: number;
  townHallWeaponLevel: number;
  expLevel: number;
  trophies: number;
  bestTrophies: number;
  warStars: number;
  attackWins: number;
  defenseWins: number;
  builderHallLevel: number;
  builderBaseTrophies: number;
  versusTrophies: number;
  bestBuilderBaseTrophies: number;
  bestVersusTrophies: number;
  versusBattleWins: number;
  role: 'leader';
  warPreference: 'in';
  donations: number;
  donationsReceived: number;
  clanCapitalContributions: number;
  clan: {
    tag: string;
    name: string;
    clanLevel: number;
    badgeUrls: {
      small: string;
      large: string;
      medium: string;
    };
  };
  league: League;
  builderBaseLeague: {
    id: number;
    name: string;
  };
  legendStatistics: {
    legendTrophies: number;
    bestSeason: {
      id: string;
      rank: number;
      trophies: number;
    };
    currentSeason: {
      trophies: number;
    };
  };
  achievements: {
    name: string;
    stars: 3;
    value: 15;
    target: 10;
    info: string;
    completionInfo: string;
    village: 'home' | 'builderBase' | 'clanCapital';
  }[];
  playerHouse: PlayerHouse;
  labels: Label[];
  troops: {
    name: string;
    level: number;
    maxLevel: number;
    village: 'home' | 'builderBase';
  }[];
}

export const checkPlayer: TypeChecker<Player> = (data: any): data is Player => {
  return true;
};
