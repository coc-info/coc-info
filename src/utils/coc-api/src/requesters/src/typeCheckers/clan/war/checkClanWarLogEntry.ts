import { TypeChecker } from '../../../createRequester';

import { ClanWarLogEntry } from '@/utils/coc-api/types/clan/war/ClanWarLogEntry';

export const checkClanWarLogEntry: TypeChecker<ClanWarLogEntry> = (data): data is ClanWarLogEntry => {
  return true;
};
