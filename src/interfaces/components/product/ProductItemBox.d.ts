interface ProductItemBoxProps {
  maxItemCount?: number;
  items?: ProductItemProps[];
  totalAmount?: number;
  onChange?: (items: ProductItemProps[]) => void;
}
