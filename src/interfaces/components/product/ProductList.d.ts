interface ProductListProps {
  className?: string;
  title: string | React.ReactElement | boolean;
  products: Product[];
  pagination?: boolean;
  scrollable?: boolean;
  sort?: string;
  noSort?: boolean;
}
