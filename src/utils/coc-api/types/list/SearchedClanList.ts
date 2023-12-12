import { ListWithPaging, createListWithPagingChecker } from './ListWithPaging';
import { SearchedClan, checkSearchedClan } from '../clan/SearchedClan';

export type SearchedClanList = ListWithPaging<SearchedClan>;

export const checkSearchedClanList = createListWithPagingChecker(checkSearchedClan);
