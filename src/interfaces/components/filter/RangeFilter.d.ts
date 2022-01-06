interface RangeFilterProps extends FilterProps {
  value?: [number?, number?];
  onChange?: (value: [number?, number?]) => void;
}
