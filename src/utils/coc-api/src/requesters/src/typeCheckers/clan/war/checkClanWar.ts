import { ClanWar } from '@/utils/coc-api/types';
import { TypeChecker } from '../../../createRequester';

export const checkClanWar: TypeChecker<ClanWar> = (data): data is ClanWar => {
  return true;
};
