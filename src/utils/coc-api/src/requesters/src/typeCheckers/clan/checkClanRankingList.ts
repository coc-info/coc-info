import { ClanRanking } from '@/utils/coc-api/types';
import { ListWithPaging } from '@/utils/coc-api/types';
import { TypeChecker } from '../../createRequester';
import { checkClanRanking } from './checkClanRanking';

export const checkClanRankingList: TypeChecker<ListWithPaging<ClanRanking>> = (
  data
): data is ListWithPaging<ClanRanking> => {
  const { items } = data;
  if (data && Array.isArray(items) && items.every((item) => checkClanRanking(item))) {
    return true;
  }
  return false;
};
