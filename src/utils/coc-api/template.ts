interface a {
  fetcher: () => any;
  typeChecker: (data: any) => any;
  mapper: (data: any) => any;
  sender: (data: any) => any;
}

function createApi({ fetcher, typeChecker, mapper }: a) {
  return () => mapper(typeChecker(fetcher()));
}
