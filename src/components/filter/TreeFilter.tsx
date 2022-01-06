import React from 'react';
import './TreeFilter.scss';
import Filter from './Filter';
import TreeFilterList from './TreeFilterList';

const TreeFilter: React.FC<TreeFilterProps> = (props) => {
  const {title, items, className, onChange} = props;

  const clearItems = (items: FilterItem[]) => {
    items?.forEach((item) => {
      item.checked = false;
      item.intermediateChecked = false;
      if (item.children) {
        clearItems(item.children);
      }
    });
  };

  const onClear = () => {
    if (!items) return;
    const _items = JSON.parse(JSON.stringify(items));
    clearItems(_items);
    onChange?.(_items);
  };

  return <Filter title={title} className={className} onClear={onClear}>
    <TreeFilterList items={items || []} onChange={onChange}/>
  </Filter>;
};

export default TreeFilter;
