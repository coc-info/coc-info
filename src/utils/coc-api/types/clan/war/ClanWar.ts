import { ClanWarNotInOnApi, ClanWarOnApi } from '@/utils/coc-api/requesters/types';

/*클랜전 정보*/
export interface ClanWar extends ClanWarOnApi {}

export interface ClanWarNotIn extends ClanWarNotInOnApi {}
