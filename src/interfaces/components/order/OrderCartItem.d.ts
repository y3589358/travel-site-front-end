interface OrderCartItemProps {
  id?: string | number;
  title?: string;
  subItems?: OrderCartSubItem[];
  date?: string;
  type?: string;
  totalAmount?: number;
  warning?: string;
  toConfirm?: boolean;
  invalid?: boolean;
  selected?: boolean;
  onSelect?: (selected: boolean) => void;
  onDelete?: () => void;
  onSubItemsChange?: (subItems: OrderCartSubItem[]) => void;
  onEdit?: () => void;
}

interface OrderCartSubItem {
  name: string;
  count: number;
  price: number;
}
