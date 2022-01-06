import React from 'react';
import { Fragment,useState } from 'react'
import './TreeFilterItem.scss';
import toggleUp from './toggleUp.png';
import toggleDown from './toggleDown.png';
import {Checkbox} from '@chakra-ui/react';

const TreeFilterItem: React.FC<TreeFilterItemProps> = (props) => {
  const [toggleBtnIsDown, changeToggleBtn] = useState(false);//二级分类默认收起
  const {item, level, onChange} = props;
  const {label} = item;

  const setHideChild = () => {
    changeToggleBtn(!toggleBtnIsDown)
  }

  const _onChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.({
      ...item,
      checked: ev.target.checked,
    });
  };

  return <div
    onClick={() => setHideChild()}
    className={['tree-filter-item', 
    `tree-filter-item-level-${level}`,
    item.children ? "has-child" : null,
    toggleBtnIsDown ? "child-is-open" : "child-is-closed"
    ].join(' ')}
    style={{
      backgroundImage: `url(${toggleBtnIsDown ? toggleUp : toggleDown})`,
      paddingLeft: `${(level ? (level+1)*25 : 25)}px`,
    }}
  >
    {item.checked}
    <div>
      <Checkbox
        isIndeterminate={item.intermediateChecked}
        isChecked={item.checked}
        className={[
          'tree-filter-item-checkbox',
          item.checked ? 'checked' : '',
        ].filter(c => !!c).join(' ')}
        onChange={_onChange}
      />
      <span className="tree-filter-item-label">{label}</span>
    </div>
  </div>;
};

export default TreeFilterItem;
