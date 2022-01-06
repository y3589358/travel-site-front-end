import {atom} from 'recoil';

export default atom<OrderState>({
  key: 'orderState',
  default: {
    steps: [
      {key: 'cart', label: '购物车'},
      {key: 'info', label: '填写信息'},
      {key: 'pay', label: '支付'},
      {key: 'complete', label: '完成预定'},
    ],
  }
});
