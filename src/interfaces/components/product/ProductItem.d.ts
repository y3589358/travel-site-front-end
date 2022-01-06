interface ProductItemProps {
  id?: string;
  name?: string;
  price?: number;
  count?: number;
  onChange?: (count: number) => void;
}
