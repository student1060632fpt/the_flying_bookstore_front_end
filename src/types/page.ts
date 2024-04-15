interface Pageable {
  pageNumber: number;
  pageSize: number;
  sort: ISort;
  offset: number;
  unpaged: boolean;
  paged: boolean;
}

export interface PageResponse<T> {
  content: T[]; // Change 'any' to the type of your content items
  pageable: Pageable;
  last: boolean;
  totalPages: number;
  totalElements: number;
  first: boolean;
  numberOfElements: number;
  size: number;
  number: number;
  sort: ISort;
  empty: boolean;
}

interface ISort{
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}