export interface WarMember {
  tag: string;
  name: string;
  mapPosition: number;
  townhallLevel: number;
  opponentAttacks: number;
  bestOpponentAttack?: {
    order: number;
    attackerTag: string;
    attackerName: string;
    attackerMapPosition: number;
    stars: number;
    destructionPercentage: number;
  };

  // attacks: [];
}
