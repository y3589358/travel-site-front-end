interface OrderPayBoxProps {
  items: OrderPayItem[];
  balance: number;
  onChange?: (key: string) => void;
}

interface OrderPayItem {
  key: string;
  label: string;
  image: React.ReactElement;
}
