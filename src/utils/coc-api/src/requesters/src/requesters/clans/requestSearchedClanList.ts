import { createRequester } from '../../createRequester';
import { fetchSearchedClanList } from '../../fetchers/clans/fetchSearchedClanList';
import { checkSearchedClanList } from '../../typeCheckers/clan/checkSearchedClanList';

export const requestSearchedClanList = createRequester({
  fetcher: fetchSearchedClanList,
  typeChecker: checkSearchedClanList,
});
