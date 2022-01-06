import React from 'react';
import './TreeFilterList.scss';
import TreeFilterItem from './TreeFilterItem';

const TreeFilterList: React.FC<TreeFilterListProps> = (props) => {
  const {items, level, onChange} = props;

  const changeItems = (items: FilterItem[], checked: boolean) => {
    items.forEach(item => {
      item.checked = checked;
      if (item.children) {
        changeItems(item.children, checked);
      }
    });
  };

  const onItemChange = (i: number) => (item: FilterItem) => {
    const _items = JSON.parse(JSON.stringify(items)) as FilterItem[];
    _items[i].checked = item.checked;
    if (_items[i].intermediateChecked) {
      _items[i].intermediateChecked = false;
    }
    if (_items[i].children) {
      changeItems(_items[i].children || [], item.checked || false);
    }
    onChange?.(_items);
  };

  const onItemsChange = (i: number) => (children: FilterItem[]) => {
    const _items = JSON.parse(JSON.stringify(items)) as FilterItem[];
    _items[i].checked = children.every(subItem => subItem.checked);
    _items[i].intermediateChecked = children.some(subItem => subItem.checked) && !_items[i].checked;
    _items[i].children = JSON.parse(JSON.stringify(children));
    onChange?.(_items);
  };

  return <div className="tree-filter-list">
    {items.map((item, i) => {
      const els = [];
      els.push(<TreeFilterItem key={i} item={item} level={level ?? 0} onChange={onItemChange(i)}/>);
      if (item?.children?.length) {
        els.push(<TreeFilterList
          key={`l${i}`}
          items={item.children}
          level={(level ?? 0) + 1}
          onChange={onItemsChange(i)}
        />);
      }
      return els;
    })}
  </div>;
};

export default TreeFilterList;
