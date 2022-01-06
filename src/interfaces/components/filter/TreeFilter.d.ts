interface TreeFilterProps extends FilterProps {
  items?: FilterItem[];
  onChange?: (items: FilterItem[]) => void;
}
