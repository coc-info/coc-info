import { createRequester } from '../../createRequester';
import { fetchClanWarLog } from '../../fetchers/clans/fetchClanWarLog';
import { checkClanWarLog } from '../../typeCheckers/clan/war/checkClanWarLogList';

export const requestClan = createRequester({ fetcher: fetchClanWarLog, typeChecker: checkClanWarLog });
