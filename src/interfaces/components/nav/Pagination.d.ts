interface PaginationProps {
  current: number;
  total: number;
  onChange?: (page: number, pageSize: number) => void;
}
