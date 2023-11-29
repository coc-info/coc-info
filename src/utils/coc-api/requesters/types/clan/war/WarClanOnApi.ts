import { ClanWarMemberOnApi } from '../..';

export interface WarClanOnApi {
  tag: string;
  name: string;
  badgeUrls: {
    small: string;
    medium: string;
    large: string;
  };
  clanLevel: number;
  attacks: number;
  stars: number;
  destructionPercentage: number;
  members: ClanWarMemberOnApi[];
}

interface WarClan {
  name: string;
}

interface WarClanExtended extends WarClan {
  location: string;
}

interface ClanWar {
  state: string;
  clan: WarClan;
}

const warClans: (WarClanExtended | WarClan)[] = [
  {
    name: 'foo',
    location: 'korea',
  },
  {
    name: 'bar',
  },
  {
    name: 'bizz',
    location: 'china',
  },
];

const clanWars: ClanWar[] = [
  {
    state: 'inWar',
    clan: warClans[0],
  },
  {
    state: 'notInWar',
    clan: warClans[1],
  },
  {
    state: 'inWar',
    clan: warClans[2],
  },
];

function isWarClanExtended(clan: WarClan | WarClanExtended): clan is WarClanExtended {
  return 'location' in clan;
}

if (isWarClanExtended(clanWars[0].clan)) {
  clanWars[0].clan.location;
}
