import React, {useState} from 'react';
import './OrderListTable.scss';
import {Button, Checkbox} from '@chakra-ui/react';
import TableSort from '../table/TableSort';
import Pagination from '../nav/Pagination';
import {useNavigate} from 'react-router-dom';

const OrderListTable: React.FC<OrderListTableProps> = (props) => {
  const navigate = useNavigate();

  const {total, data} = props;
  const columns = [
    {
      key: 'orderNo',
      label: '订单号',
    },
    {
      key: 'product',
      label: '产品名称',
    },
    {
      key: 'submitTime',
      label: '预定提交时间',
    },
    {
      key: 'travelTime',
      label: '预定出行时间',
    },
    {
      key: 'totalAmount',
      label: '订单总价',
    },
    {
      key: 'status',
      label: '支付方式订单状态',
    },
    {
      key: 'contact',
      label: '联系人手机',
    },
  ];

  const [current, setCurrent] = useState(1);
  const [currentOrderType, sortByOrderType] = useState("");//根据订单字段排序
  const [CurrentDirectionType, sortByDirectionType] = useState(-1);//根据方向排序
  
  const onPageChange = (page: number, pageSize: number) => {
    setCurrent(page);
  };

  const handleSortByOrderType = (orderType:string,DirectionType:number) => {

    sortByOrderType(orderType);
    sortByDirectionType(DirectionType);

    const mysort = (a:any,b:any)=> {
      if(a[orderType] !== b[orderType]){
        if(DirectionType == -1){
          return a[orderType] > b[orderType] ? -1 : 1;
        }
        else if(DirectionType == 1){
          return a[orderType] < b[orderType] ? -1 : 1;
        }
      }
      return a[orderType] < b[orderType] ? -1 : 1;
    }
    data.sort(mysort);
  }

const [checkedItems, setCheckedItems] = React.useState([false,false])
const allChecked = checkedItems.every(Boolean)
const isIndeterminate = checkedItems.some(Boolean) && !allChecked

const onChangeCheckState = (i:number,e: React.ChangeEvent<HTMLInputElement>)=>{
  // 需要克隆一个数组，改变克隆数组的指定索引的值，然后再把整个克隆数组扔进set方法更新state
  const _checkedItems = JSON.parse(JSON.stringify(checkedItems))
  _checkedItems[i] = e.target.checked;
  setCheckedItems(_checkedItems)
}

  return <div className="order-list-table">
    <div className="order-list-table-top">
      <div className="total">
        共有{total}笔订单
      </div>
      <div className="btn-group">
        <Button className="btn warning">导出订单</Button>
      </div>
    </div>

    <div className="order-list-table-content">
      <div className="order-list-table-header">
        <div className="header-cell" style={{flexBasis: 64}}>
          <Checkbox
           className='order-list-table-checkbox' 
           isChecked={allChecked}
           isIndeterminate={isIndeterminate}
           onChange={(e) => setCheckedItems([e.target.checked, e.target.checked])}
          />
        </div>
        <div className="header-cell" style={{flexBasis: 177}}>订单号</div>
        <div className="header-cell" style={{flexBasis: 294}}>产品名称</div>
        <div className="header-cell" style={{flexBasis: 294}}>
          预定提交时间
          <TableSort sortType={'submitTime'} getSortByOrderType={handleSortByOrderType} />
        </div>
        <div className="header-cell" style={{flexBasis: 144}}>
          预定出行时间
          <TableSort sortType={'travelDate'} getSortByOrderType={handleSortByOrderType} />
        </div>
        <div className="header-cell" style={{flexBasis: 100}}>
          订单总价
          <TableSort sortType={'totalAmount'} getSortByOrderType={handleSortByOrderType} />
        </div>
        <div className="header-cell" style={{flexBasis: 100, flexGrow: 1, flexDirection: 'column'}}>
          <div>支付方式</div>
          <div>订单状态</div>
        </div>
        <div className="header-cell" style={{flexBasis: 120, flexGrow: 1, flexDirection: 'column'}}>
          <div>联系人</div>
          <div>手机</div>
        </div>
      </div>
      <div className="order-list-table-body">
        {
          data.map((row: any, i) => <div className="row">
            <div className="cell sep" style={{flexBasis: 64}}>
              <Checkbox 
              className='order-list-table-checkbox' 
              isChecked={checkedItems[i]}
              onChange={(e) => onChangeCheckState(i,e)}
              />
            </div>
            <div
              className="cell sep order-no"
              style={{flexBasis: 177}}
              onClick={() => navigate(row.status === '待付款' ? '/orders/1?unpaid=1' : '/orders/1')}
            >
              {row.orderNo}
            </div>
            <div className="cell sep order-name" 
              style={{flexBasis: 294, flexDirection: 'column'}}
              onClick={() => navigate(row.status === '待付款' ? '/orders/1?unpaid=1' : '/orders/1')}
            >
              <div className="product-name">{row.product.name}</div>
              <div className="product-info">订单共有{row.product.count}样产品</div>
            </div>
            <div className="cell" style={{flexBasis: 294}}>
              <div style={{flexBasis: 100, textAlign: 'center'}}>
                {row.submitTime}
              </div>
            </div>
            <div className="cell" style={{flexBasis: 144}}>{row.travelDate}</div>
            <div className="cell" style={{flexBasis: 100}}>
              <span className="unit">¥</span>
              {row.totalAmount}
            </div>
            <div className="cell" style={{flexBasis: 100, flexGrow: 1, flexDirection: 'column'}}>
              <div>{row.payMethod}</div>
              <div className="status" style={{
                backgroundColor: row.status === '待付款' ? '#FFF4F5' : '',
                color: row.status === '待付款' ? '#FF6770' : '',
              }}>
                {row.status}
              </div>
            </div>
            <div className="cell" style={{flexBasis: 120, flexGrow: 1, flexDirection: 'column'}}>
              <div>{row.contact.name}</div>
              <div>{row.contact.phone}</div>
            </div>
          </div>)
        }
      </div>
      <div className="order-list-table-pagination">
        <Pagination total={total} current={current} onChange={onPageChange}/>
      </div>
    </div>
  </div>;
};

export default OrderListTable;
