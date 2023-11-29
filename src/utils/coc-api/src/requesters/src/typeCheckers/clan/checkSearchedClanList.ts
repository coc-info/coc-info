import { SearchedClan } from '@/utils/coc-api/types';
import { ListWithPaging } from '@/utils/coc-api/types';
import { TypeChecker } from '../../createRequester';

import { checkSearchedClan } from './checkSearchedClan';

export const checkSearchedClanList: TypeChecker<ListWithPaging<SearchedClan>> = (
  data
): data is ListWithPaging<SearchedClan> => {
  const { items } = data;
  if (data && Array.isArray(items) && items.every((item) => checkSearchedClan(item))) {
    return true;
  }
  return false;
};
