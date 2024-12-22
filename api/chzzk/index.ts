export type ApiResponse<T> = {
  code: number;
  content: T;
  message: string | null;
};

export type ApiPaginationResponse<T> = ApiResponse<T> & {
  totalPage: number;
  currentPage: number;
  pageSize: number;
  isLastPage: boolean;
  totalElementNumber: number;
};
