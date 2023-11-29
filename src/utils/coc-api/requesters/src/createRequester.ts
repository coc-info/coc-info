export interface FetchingResult {
  res: Response;
  data?: any;
}

export interface RequestingResult<T> {
  res: Response;
  data?: T;
}

const fetchToCocApi = async (path: string, options: RequestInit = {}) => {
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

export type Fetcher<P> = (fetch: typeof fetchToCocApi, props: P) => Promise<FetchingResult>;
export type TypeChecker<T> = (data: any) => data is T;

export interface RequesterCreatorProps<T, P> {
  fetcher: Fetcher<P>;
  typeChecker: TypeChecker<T>;
}

export type Requester<T, P> = (props: P) => Promise<RequestingResult<T>>;

export function createRequester<T, P>({ fetcher, typeChecker }: RequesterCreatorProps<T, P>): Requester<T, P> {
  return async (props: P) => {
    const { res, data } = await fetcher(fetchToCocApi, props);

    let result: RequestingResult<T> = { res };

    if (data !== undefined && typeChecker(data)) {
      result = {
        ...result,
        data,
      };
    }

    return result;
  };
}
