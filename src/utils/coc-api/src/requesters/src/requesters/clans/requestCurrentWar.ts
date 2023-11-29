import { ClanWar } from '@/utils/coc-api/types';
import { TypeChecker, createRequester } from '../../createRequester';
import { fetchCurrentWar } from '../../fetchers/clans/fetchCurrentWar';
import { checkClanWar } from '../../typeCheckers/clan/war/checkClanWar';
import { ClanWarNotIn } from '@/utils/coc-api/types/clan/war/ClanWar';

const checkClanWarOrClanWarNotIn: TypeChecker<ClanWar | ClanWarNotIn> = (data): data is ClanWar | ClanWarNotIn => {
  const tempCheckClanWarNotIn = (data: any): data is ClanWarNotIn => true;
  if (checkClanWar(data) || tempCheckClanWarNotIn(data)) return true;
  return false;
};

export const requestCurrentWar = createRequester({ fetcher: fetchCurrentWar, typeChecker: checkClanWarOrClanWarNotIn });
