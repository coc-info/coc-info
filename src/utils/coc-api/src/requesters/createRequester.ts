import { TypeChecker } from '../../types/TypeChecker';

export interface FetchingResult {
  response: Response;
  data?: any;
}

export interface CocApiResponse<T> {
  response: Response;
  data?: T;
  isPassedTypeCheck: boolean;
}

export type FetchFromCocApi = (path: string, options?: RequestInit) => Promise<Response>;
export type Fetcher<P> = (fetchFromCocApi: FetchFromCocApi, params: P) => Promise<FetchingResult>;
export type Requester<T, P> = (params: P) => Promise<CocApiResponse<T>>;

const fetchFromCocApi: FetchFromCocApi = async (path: string, options: RequestInit = {}) => {
  const apiKey = process.env.COC_API_KEY;
  const endpoint = process.env.COC_API_ENDPOINT;

  const url = endpoint + path;
  options.headers = { Authorization: `Bearer ${apiKey}`, ...options.headers };

  try {
    const res = await fetch(url, options);

    return res;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export function createRequester<T, P>(fetcher: Fetcher<P>, typeChecker: TypeChecker<T>): Requester<T, P> {
  return async (params: P) => {
    const { response, data } = await fetcher(fetchFromCocApi, params);

    let cocApiResponse: CocApiResponse<T> = { response, isPassedTypeCheck: true };
    if (data === undefined) return cocApiResponse;

    if (!typeChecker(data)) {
      cocApiResponse.isPassedTypeCheck = false;
      return cocApiResponse;
    }

    cocApiResponse.data = data;
    return cocApiResponse;
  };
}
