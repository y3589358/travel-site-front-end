interface TreeFilterListProps {
  items: FilterItem[];
  level?: number;
  onChange?: (items: FilterItem[]) => void;
}
