export interface ResultFetchedFromApi<T> {
  response: Response;
  data: T | undefined;
}
