export interface ListWithPaging<T> {
  items: T[];
  paging: {
    cursors: {
      before?: string;
      after?: string;
    };
  };
}
