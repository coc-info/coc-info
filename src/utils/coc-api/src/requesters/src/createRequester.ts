export interface FetchingResult {
  res: Response;
  data?: any;
}

export interface RequestingResult<T> {
  res: Response;
  data?: T;
  isPassedTypeCheck: boolean;
}

type FetchFromApi = (path: string, options?: RequestInit) => Promise<Response>;
export type Fetcher<P> = (fetchFromApi: FetchFromApi, params: P) => Promise<FetchingResult>;
export type TypeChecker<T> = (data: any) => data is T;
export type Requester<T, P> = (params: P) => Promise<RequestingResult<T>>;

const fetchFromApi: FetchFromApi = async (path: string, options: RequestInit = {}) => {
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

export interface RequesterCreatorParams<T, P> {
  fetcher: Fetcher<P>;
  typeChecker: TypeChecker<T>;
}

export function createRequester<T, P>({ fetcher, typeChecker }: RequesterCreatorParams<T, P>): Requester<T, P> {
  return async (props: P) => {
    const { res, data } = await fetcher(fetchFromApi, props);

    let result: RequestingResult<T> = { res, isPassedTypeCheck: true };
    if (data === undefined) return result;

    if (!typeChecker(data)) {
      result.isPassedTypeCheck = false;
      return result;
    }

    result.data = data;
    return result;
  };
}
