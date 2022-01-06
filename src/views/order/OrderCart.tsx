import React, {useState} from 'react';
import './OrderCart.scss';
import WarnIcon from '../../assets/icons/WarnIcon.svg';
import Container from '../../layouts/components/Container';
import {
  Button, 
  Checkbox,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton
} from '@chakra-ui/react';
import OrderCartItem from '../../components/order/OrderCartItem';
import {useNavigate} from 'react-router-dom';

export default () => {
  const navigate = useNavigate();

  const [isOpenDelProductModle,toggleDelProductModle] = useState(false);
  const [isOpenInvalidModal,toggleInvalidModal] = useState(false);
  const [isOpenCanNotCheckOutModal,toggleCanNotCheckOutModal] = useState(false);

  const [totalCount, setTotalCount] = useState(7);
  const [selectedCount, setSelectedCount] = useState(2);
  const [selectedTotalAmount, setSelectedTotalAmount] = useState(1710);

  const [cartItems, setCartItems] = useState<OrderCartItemProps[]>([
    {
      id: 1,
      title: '香港迪士尼乐园门票',
      subItems: [
        {name: '成人', count: 1, price: 468},
        {name: '儿童（3-11岁）', count: 2, price: 836},
      ],
      date: '2021年12月18日',
      type: '普通日子1日门票',
      totalAmount: 1304,
      selected: true,
    },
    {
      id: 2,
      title: '香港迪士尼乐园门票',
      subItems: [
        {name: '午餐／晚餐＋点心', count: 3, price: 222},
        {name: '午餐套餐＋晚餐套餐＋点心', count: 1, price: 184},
      ],
      date: '2021年12月18日',
      type: '美食餐券',
      totalAmount: 606,
      selected: true,
    },
    {
      id: 3,
      title: '香港迪士尼乐园门票',
      subItems: [
        {name: '成人', count: 1, price: 468},
        {name: '儿童（3-11岁）', count: 2, price: 836},
      ],
      date: '2021年12月18日',
      type: '普通日子1日门票',
      totalAmount: 1304,
      warning: '该方案数量不足，请修改适数量',
      toConfirm: true,
    },
    {
      id: 4,
      title: '香港迪士尼乐园门票',
      subItems: [
        {name: '午餐／晚餐＋点心', count: 3, price: 222},
        {name: '午餐套餐＋晚餐套餐＋点心', count: 1, price: 184},
      ],
      date: '2021年12月18日',
      type: '美食餐券',
      totalAmount: 606,
      warning: '该方案数量不足，请修改适数量',
      toConfirm: true,
    },
    {
      id: 5,
      title: '香港迪士尼乐园门票',
      subItems: [
        {name: '午餐／晚餐＋点心', count: 3, price: 222},
        {name: '午餐套餐＋晚餐套餐＋点心', count: 1, price: 184},
      ],
      date: '2021年12月18日',
      type: '美食餐券',
      totalAmount: 606,
      warning: '該日期已失效，请修改可行时间',
      toConfirm: true,
    },
    {
      id: 6,
      title: '香港迪士尼乐园门票',
      subItems: [
        {name: '成人', count: 1, price: 468},
        {name: '儿童（3-11岁）', count: 2, price: 836},
      ],
      date: '2021年12月18日',
      type: '普通日子1日门票',
      totalAmount: 1304,
      warning: '该产品已下架',
      invalid: true,
    },
    {
      id: 7,
      title: '香港迪士尼乐园门票',
      subItems: [
        {name: '午餐／晚餐＋点心', count: 3, price: 222},
        {name: '午餐套餐＋晚餐套餐＋点心', count: 1, price: 184},
      ],
      date: '2021年12月18日',
      type: '美食餐券',
      totalAmount: 606,
      warning: '该产品已下架',
      invalid: true,
    }
  ]);

  const getCartItems = () => {
    return cartItems.filter(d => !d.toConfirm && !d.invalid);
  };

  const getToConfirmCartItems = () => {
    return cartItems.filter(d => d.toConfirm);
  };

  const getInvalidCartItems = () => {
    return cartItems.filter(d => d.invalid);
  };

  const [selectAll, setSelectAll] = useState(true);
  const onSelectAll = (checked: boolean) => {
    setSelectAll(checked);
    const _cartItems = JSON.parse(JSON.stringify(cartItems)) as OrderCartItemProps[];
    _cartItems.forEach(d => {
      d.selected = checked;
    });
    setCartItems(_cartItems);
  };
  const onSelectAllChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const checked = ev.target.checked;
    onSelectAll(checked);
  };
  const onSelect = (id: string | number) => (selected: boolean) => {
    const _cartItems = JSON.parse(JSON.stringify(cartItems)) as OrderCartItemProps[];
    const idx = _cartItems.findIndex(d => d.id === id);
    _cartItems[idx].selected = selected;
    setCartItems(_cartItems);
    setSelectAll(_cartItems.every(d => d.selected));
  };

  const onDeleteSelected = () => {
    toggleDelProductModle(!isOpenDelProductModle);
    // if (!window.confirm('是否确认删除?')) return;
    const _cartItems = JSON.parse(JSON.stringify(cartItems.filter(d => !d.selected))) as OrderCartItemProps[];
    setCartItems(_cartItems);
    setSelectAll(false);
  };
  const onDeleteInvalid = () => {
    toggleInvalidModal(!isOpenInvalidModal);
    // if (!window.confirm('是否确认删除?')) return;
    const _cartItems = JSON.parse(JSON.stringify(cartItems.filter(d => !d.invalid))) as OrderCartItemProps[];
    setCartItems(_cartItems);
  };
  const onDelete = (id: string | number) => () => {
    if (!window.confirm('是否确认删除?')) return;
    const _cartItems = JSON.parse(JSON.stringify(cartItems)) as OrderCartItemProps[];
    const idx = _cartItems.findIndex(d => d.id === id);
    _cartItems.splice(idx, 1);
    setCartItems(_cartItems);
  };
  const onSubItemsChange = (id: string | number) => (subItems: OrderCartSubItem[]) => {
    const _cartItems = JSON.parse(JSON.stringify(cartItems)) as OrderCartItemProps[];
    const idx = _cartItems.findIndex(d => d.id === id);
    _cartItems[idx].subItems = subItems;
    setCartItems(_cartItems);
  };

  const onCheckout = () => {
    if (cartItems.filter(d => d.selected && !d.toConfirm && !d.invalid).length === 0) {
      // window.alert('无法结算');
      toggleCanNotCheckOutModal(!isOpenCanNotCheckOutModal);
      return;
    }
    navigate('/orders/submit');
  };

  return <div className="order-cart">
    <Container>
      <div className="order-cart-title">
        <span className="order-cart-title-main">购物车</span>
        <span className="order-cart-title-sub">- 共有 {totalCount} 样产品放入购物车</span>
      </div>

      <div className="order-cart-filter">
        <Checkbox isChecked={selectAll} className="select-all item" onChange={onSelectAllChange}/>
        <span className="label btn item" onClick={() => onSelectAll(true)}>全选</span>
        <span className="label btn item" onClick={() => toggleDelProductModle(!isOpenDelProductModle)}>删除选中产品</span>
        <span className="label btn item" onClick={() => toggleInvalidModal(!isOpenInvalidModal)}>清除失效产品</span>
      </div>

      <div className="order-cart-container">
        <div className="order-cart-box-list">
          <div className="order-cart-box">
            {getCartItems().map((item, i) => <OrderCartItem
              key={i}
              {...item}
              onSelect={onSelect(item.id || 0)}
              onDelete={onDelete(item.id || 0)}
              onSubItemsChange={onSubItemsChange(item.id || 0)}
              onEdit={() => navigate('/products/1?edit=1')}
            />)}
          </div>

          <div className="order-cart-box">
            <div className="order-cart-box-title">
              以下活动需重新确认信息
            </div>
            <div className="order-cart-box">
              {getToConfirmCartItems().map((item, i) => <OrderCartItem
                key={i}
                {...item}
                onSelect={onSelect(item.id || 0)}
                onDelete={onDelete(item.id || 0)}
                onSubItemsChange={onSubItemsChange(item.id || 0)}
                onEdit={() => navigate('/products/1?edit=1')}
              />)}
            </div>
          </div>

          <div className="order-cart-box">
            <div className="order-cart-box-title">
              已失效产品
            </div>
            <div className="order-cart-box">
              {getInvalidCartItems().map((item, i) => <OrderCartItem
                key={i}
                {...item}
                onSelect={onSelect(item.id || 0)}
                onDelete={onDelete(item.id || 0)}
                onSubItemsChange={onSubItemsChange(item.id || 0)}
              />)}
            </div>
          </div>
        </div>
        <div className="order-cart-sidebar">
          <div className="order-cart-select-box">
            <div className="order-cart-select-box-top">
              <div className="order-cart-select-box-label">
                已选择<span className="count">{selectedCount}</span>个产品
              </div>
              <div className="order-cart-select-box-total-amount">
                {selectedTotalAmount.toLocaleString()}
              </div>
            </div>
            <div className="order-cart-select-box-bottom">
              <Button className="btn warning" onClick={onCheckout}>结算</Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
    <Modal id='order-cart-modal' isOpen={isOpenDelProductModle} onClose={()=>toggleDelProductModle} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
              <div 
                className='title-icon' 
                style={{
                backgroundImage: `url(${WarnIcon})`
              }}>
              </div>
              <div className='title-text'>删除产品</div>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            是否确认删除产品？
          </ModalBody>
          <ModalFooter>
            <Button className='warning' onClick={()=>onDeleteSelected()}>确定删除</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Modal id='order-cart-modal' isOpen={isOpenInvalidModal} onClose={()=>toggleInvalidModal} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
              <div 
                className='title-icon' 
                style={{
                backgroundImage: `url(${WarnIcon})`
              }}>
              </div>
              <div className='title-text'>清除失效产品</div>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            是否确认清除失效产品？
          </ModalBody>
          <ModalFooter>
            <Button className='warning' onClick={()=>onDeleteInvalid()}>确定清除</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Modal id='order-cart-modal' isOpen={isOpenCanNotCheckOutModal} onClose={()=>toggleCanNotCheckOutModal} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
              <div 
                className='title-icon' 
                style={{
                backgroundImage: `url(${WarnIcon})`
              }}>
              </div>
              <div className='title-text'>无法结算</div>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          请返回购物车选择可预定的产品
          </ModalBody>
          <ModalFooter>
            <Button className='warning' onClick={()=>toggleCanNotCheckOutModal(!isOpenCanNotCheckOutModal)}>返回页面</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
  </div>;
};

