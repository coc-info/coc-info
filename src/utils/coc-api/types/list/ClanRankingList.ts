import { ListWithPaging, createListWithPagingChecker } from './ListWithPaging';
import { ClanRanking, checkClanRanking } from '../clan/ClanRanking';

export type ClanRankingList = ListWithPaging<ClanRanking>;

export const checkClanRankingList = createListWithPagingChecker(checkClanRanking);
