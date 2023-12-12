import { getClan } from './src/requesters/clans/getClan';
import { getClanWarLog } from './src/requesters/clans/getClanWarLog';
import { getSearchedClanList } from './src/requesters/clans/getSearchedClanList';
import { getCurrentWar } from './src/requesters/clans/getCurrentWar';

import { getClanRankingList } from './src/requesters/locations/getClanRankingList';

import { getPlayer } from './src/requesters/players/getPlayer';

export {
  //clans
  getClan,
  getClanWarLog,
  getSearchedClanList,
  getCurrentWar,

  //locations
  getClanRankingList,

  //players
  getPlayer,
};
