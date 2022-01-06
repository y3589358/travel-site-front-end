interface OrderPayActionBox {
  amount: number;
  discount: number;
  payAmount: number;
  paid?: boolean;
  paidMethod?: string;
  paidTime?: string;
  paidStatus?: string;
  onClickPay?: () => void;
}
