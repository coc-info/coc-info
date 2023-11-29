import { createRequester } from '../../createRequester';
import { fetchClan } from '../../fetchers/clans/fetchClan';
import { checkClan } from '../../typeCheckers/clan/checkClan';

export const requestClan = createRequester({ fetcher: fetchClan, typeChecker: checkClan });
