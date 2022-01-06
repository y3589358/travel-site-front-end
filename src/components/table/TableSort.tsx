import React, {useState, useEffect, SyntheticEvent} from 'react';
import './TableSort.scss';
import {ArrowUpDownIcon} from '@chakra-ui/icons';
import ascendNotSelectIcon from '../../assets/icons/Ascend-not-select.png';//升序未选中图标
import ascendSelecedtIcon from '../../assets/icons/Ascend-selected.png';//升序已选中图标
import descendNotSelectIcon from '../../assets/icons/descend-not-select.png';//降序未选中图标
import descendSelectedIcon from '../../assets/icons/descend-selected.png';//降序已选中图标

const TableSort: React.FC<TableSortProps> = (props) => {
  const {sortType,getSortByOrderType} = props;
  //排序状态对象初始化，此对象包含有三个排序对象：预定提交时间，预定出行时间，订单总价。每一个对象又包含排序箭头方向、是否选中两个字段
  const [sortStateObj, setSortStateObj] = React.useState(
    {
      "submitTime":{"direction":1,"isSelected":false},//默认正序、未选中
      "travelDate":{"direction":1,"isSelected":false},
      "totalAmount":{"direction":1,"isSelected":false}
    }
  )
  
  const onChangeSortState = (e: SyntheticEvent<HTMLDivElement>)=>{
    // 需要克隆一个数组，改变克隆数组的指定索引的值，然后再把整个克隆数组扔进set方法更新state
    const _sortStateObj = JSON.parse(JSON.stringify(sortStateObj))
    for(let key in _sortStateObj){
      if(key == sortType){
        _sortStateObj[sortType].isSelected = true;//改变当前项为选中状态
      }else{
        _sortStateObj[key].isSelected = false;//其他项改成未选中状态
      }
    }
    if(_sortStateObj[sortType]["direction"] == 1){
      getSortByOrderType(sortType,-1);
      _sortStateObj[sortType]["direction"] = -1;//改变箭头方向

    }else{
      getSortByOrderType(sortType,1);
      _sortStateObj[sortType]["direction"] = 1;//改变箭头方向
    }
    setSortStateObj(_sortStateObj);
  }

  const getSortIcon = ()=> {

    const _sortStateObj = JSON.parse(JSON.stringify(sortStateObj))

    if(_sortStateObj[sortType]["direction"] == 1 && _sortStateObj[sortType].isSelected){
      return ascendSelecedtIcon;//如果升序并且选中，就返回ascendSelecedtIcon
    }else if(_sortStateObj[sortType]["direction"] == -1 && _sortStateObj[sortType].isSelected){
      return descendSelectedIcon;
    }else if(_sortStateObj[sortType]["direction"] == 1 && !_sortStateObj[sortType].isSelected){
      return ascendNotSelectIcon;
    }else if(_sortStateObj[sortType]["direction"] == -1 && !_sortStateObj[sortType].isSelected){
      return descendNotSelectIcon;
    }
  }

  //让父组件知道两件事：1、倒序还是正序，2、排序哪一项字段
  return <div className={["table-sort","sort-icon", sortType ? sortType : null].join(' ') }  
    onClick={onChangeSortState}
    style={{
      backgroundImage: `url(${ getSortIcon()})`
    }}
  >

  </div>;
};

export default TableSort;
