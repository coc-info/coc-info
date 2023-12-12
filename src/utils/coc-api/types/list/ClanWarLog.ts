import { ClanWarLogEntry, checkClanWarLogEntry } from '../clan/war/ClanWarLogEntry';
import { ListWithPaging, createListWithPagingChecker } from './ListWithPaging';

export type ClanWarLog = ListWithPaging<ClanWarLogEntry>;

export const checkClanWarLog = createListWithPagingChecker(checkClanWarLogEntry);
