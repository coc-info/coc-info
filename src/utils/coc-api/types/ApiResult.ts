export interface ApiResult<T> {
  response: Response;
  data: T | undefined;
}
