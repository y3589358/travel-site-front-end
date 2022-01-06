import React, {useEffect, useState} from 'react';
import './OrderList.scss';
import Container from '../../layouts/components/Container';
import {Breadcrumb, BreadcrumbItem, BreadcrumbLink} from '@chakra-ui/react';
import OrderListFilter from '../../components/order/OrderListFilter';
import OrderListTable from '../../components/order/OrderListTable';

export default () => {
  const [pathItems, setPathItems] = useState(['我的', '订单', '当地玩乐', '订单列表']);

  const sep = '>';

  const [total, setTotal] = useState(93);
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const data = [];
    // for (let i = 0; i < 10; i++) {
      data.push(
        {
          orderNo: '1234567890123456',
          product: {
            name: '香港迪士尼乐园门票',
            count: 2,
          },
          submitTime: '2021-11-04 16:04:24',
          travelDate: '2021-11-04',
          totalAmount: 1700,
          payMethod: '余额支付',
          status: '已确认',
          contact: {
            name: '老王',
            phone: '18582590855',
          }
        },
        {
          orderNo: '9876543210123456',
          product: {
            name: '香港迪士尼乐园门票',
            count: 2,
          },
          submitTime: '2021-12-03 19:24:12',
          travelDate: '2022-01-01',
          totalAmount: 2600,
          payMethod: '余额支付',
          status: '待付款',
          contact: {
            name: '老张',
            phone: '15332055836',
          },
        }
      );
    // }
    setData(data);
  }, []);

  return <div className="order-list">
    <Container>
      <Breadcrumb className="order-list-breadcrumb" separator={<span style={{margin: '0 8px'}}>{sep}</span>}>
        {pathItems.map((path, i) => <BreadcrumbItem key={i}>
          <BreadcrumbLink>{path}</BreadcrumbLink>
        </BreadcrumbItem>)}
      </Breadcrumb>

      <div className="order-list-title">
        订单列表
      </div>

      <OrderListFilter/>

      <OrderListTable
        total={total}
        data={data}
      />

    </Container>
  </div>;
};

