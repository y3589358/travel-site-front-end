interface FilterItem {
  label: string;
  value: string;
  children?: FilterItem[];
  checked?: boolean;
  intermediateChecked?: boolean;
}
