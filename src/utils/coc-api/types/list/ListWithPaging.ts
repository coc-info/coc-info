import { TypeChecker } from '../TypeChecker';

export interface ListWithPaging<T> {
  items: T[];
  paging: {
    cursors: {
      before?: string;
      after?: string;
    };
  };
}

export const checkListWithPaging: TypeChecker<ListWithPaging<any>> = (data: any): data is ListWithPaging<any> => {
  if (
    data &&
    Array.isArray(data.items) &&
    data.paging &&
    typeof data.paging === 'object' &&
    data.paging.cursors &&
    typeof data.paging.cursors === 'object' &&
    (data.paging.cursors.before === undefined || typeof data.paging.cursors.before === 'string') &&
    (data.paging.cursors.after === undefined || typeof data.paging.cursors.after === 'string')
  ) {
    return true;
  }

  return false;
};

/**
 * T를 포함하는 ListWithPaging에 대한 TypeChecker를 생성합니다.
 */
export const createListWithPagingChecker = <T>(typeChecker: TypeChecker<T>): TypeChecker<ListWithPaging<T>> => {
  return (data: any): data is ListWithPaging<T> => {
    if (
      data &&
      checkListWithPaging(data) &&
      data.items.every((item: any) => {
        return typeChecker(item);
      })
    ) {
      return true;
    }

    return false;
  };
};
