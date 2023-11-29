import { TypeChecker } from '../../../createRequester';
import { ListWithPaging } from '@/utils/coc-api/types';
import { ClanWarLogEntry } from '@/utils/coc-api/types/clan/war/ClanWarLogEntry';
import { checkClanWarLogEntry } from './checkClanWarLogEntry';

export const checkClanWarLog: TypeChecker<ListWithPaging<ClanWarLogEntry>> = (
  data
): data is ListWithPaging<ClanWarLogEntry> => {
  const { items } = data;
  if (data && Array.isArray(items) && items.every((item) => checkClanWarLogEntry(item))) {
    return true;
  }
  return false;
};
