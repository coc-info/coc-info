import { createRequester } from '../../createRequester';
import { fetchClanRankingList } from '../../fetchers/locations/fetchClanRankingList';
import { checkClanRankingList } from '../../typeCheckers/clan/checkClanRankingList';

export const requestClanRankingList = createRequester({
  fetcher: fetchClanRankingList,
  typeChecker: checkClanRankingList,
});
