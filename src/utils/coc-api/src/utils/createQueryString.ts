export function createQueryString<T extends Object>(options: T) {
  const entries = Object.entries(options);

  const queries = entries
    .reduce<string[]>((arr, [key, value]) => {
      if (value === undefined) return arr;
      return [...arr, `${key}=${encodeURIComponent(value)}`];
    }, [])
    .join('&');

  return queries;
}
