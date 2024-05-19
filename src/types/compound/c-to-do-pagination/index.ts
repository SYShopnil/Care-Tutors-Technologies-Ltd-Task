export interface IPagination {
  itemsPerPage: number;
  totalItems: number;
  paginate: (page: number) => void;
  currentPage: number;
}
