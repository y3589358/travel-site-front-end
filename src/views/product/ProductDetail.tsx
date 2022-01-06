import React, {useEffect, useState, useRef} from 'react';
import './ProductDetail.scss';
import ProductImageSlider from '../../components/product/ProductImageSlider';
import Container from '../../layouts/components/Container';
import {
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  Button,
  Tabs, 
  TabList, 
  TabPanels, 
  Tab, 
  TabPanel,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import TicketIcon from '../../assets/icons/TicketIcon.svg';
import CalendarWhiteIcon from '../../assets/icons/CalendarWhiteIcon.svg';
import FeatureTag from '../../components/tag/FeatureTag';
import ProductBookingBox from '../../components/product/ProductBookingBox';
import ProductList from '../../components/product/ProductList';
import exampleLocation from './exampleLocation.png';
import ClockIcon from '../../assets/icons/ClockIcon.svg';
import FlashIcon from '../../assets/icons/flash.png';
import CircleIcon from '../../assets/icons/circle.png';
import ArchiveIcon from '../../assets/icons/archive.png';
import CalendarIcon from '../../assets/icons/calendar.png';
import ReceiptIcon from '../../assets/icons/receipt.png';
import moment, {Moment} from 'moment';
import {useRecoilState} from 'recoil';
import filterState from '../../recoil/filterState';
import DateRangePicker from '../../components/date/DateRangePicker';
import {useNavigate} from 'react-router-dom';
import ProductItemBox from '../../components/product/ProductItemBox';
import Cart from '../../components/cart/Cart';
import exampleDescription from './exampleDescription.png';

const dayBlockedCache = new Map<Moment, boolean>();

export default  () => {
  const navigate = useNavigate();

  const locationRef = useRef<HTMLDivElement>(null);
  const programRef = useRef<HTMLDivElement>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrollBehavior, setScrollBehavior] = useState('inside');

  const btnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
  }, [])

  const images = [
    '/img/product.png',
    '/img/product.png',
    '/img/product.png',
    '/img/product.png',
  ];

  const features = [
    {
      icon: <img src={TicketIcon}/>,
      label: '不支持退改',
    },
    {
      icon: <img src={TicketIcon}/>,
      label: '有效期内任何一天使用',
    },
    {
      icon: <img src={TicketIcon}/>,
      label: '可出示手机电子凭证或打印凭证',
    },
    {
      icon: <img src={TicketIcon}/>,
      label: '出示凭证入场/必须提前兑换实体票券',
    },
    {
      icon: <img src={TicketIcon}/>,
      label: '可出示手机电子凭证或打印凭证',
    },
    {
      icon: <img src={TicketIcon}/>,
      label: '有效期内任何一天使用',
    },
  ];

  const [pathItems, setPathItems] = useState(['东亚', '香港', '当地玩乐', '主题 & 水上乐园']);

  const [productTitle, setProductTitle] = useState('香港迪士尼乐园门票');
  const [productSubtitle, setProductSubtitle] = useState('前往深受大人、小孩喜爱的奇妙王国「香港迪士尼乐园度假区」，置身梦幻迪士尼故事当中，与迪士尼卡通人物见面。');

  const [notices, setNotices] = useState([
    '由于开业期间票务系统库存变化较快，门票预订后请以订单确认状态为准，如遇售罄，我们将为您取消订单并全额退款，带来不便，敬请谅解，带来不便，敬请谅解',
    '确认时效：付款成功后24小时之内，KLOOK客路会将凭证发送至您的邮箱，请注意查收。或可在客路官方App的订单详情中查看凭证。',
    '游客需提前通过北京环球度假区官方App预约入园时间，并根据预约的时间入园',
    '若有更多疑问，请联系KLOOK客路客服，将有专人为您答疑解惑',
    '温馨提示：假期出游人流较高，应防疫要求，出游前请通过北京环球度假区官方App或小程序预约入园时间： 请您携带购票时绑定的身份证件并在指定日期前往北京环球影城。关于最新疫情防控政策，请前往北京环球度假区官方APP中的“安全指南” 进行了解',
  ]);

  const [programs, setPrograms] = useState([
    '[限时优惠]特定日子1日门票（有效期至2022年1月19日)',
    '普通日子1日门票（有效期至2022年1月19日）',
    '特定日子1日门票（有效期至2022年1月19日）',
    '美食餐券',
    '特惠美食餐券',
    '乐园午餐＋乐园小食＋酒店晚餐 (2张HK$100酒店餐厅内用餐券)',
    '【需自行预约入园日期】2日门票（有效期至2022年1月19日）',
  ]);

  const products = [
    {
      title: '香港迪士尼乐园',
      category: '景点门票 & 表演',
      price: 418,
    },
    {
      title: '香港迪士尼乐园',
      category: '景点门票 & 表演',
      price: 1418,
    },
    {
      title: '香港迪士尼乐园',
      category: '景点门票 & 表演',
      price: 418,
    },
    {
      title: '香港迪士尼乐园',
      category: '景点门票 & 表演',
      price: 418,
    },
    {
      title: '香港迪士尼乐园',
      category: '景点门票 & 表演',
      price: 418,
    },
    {
      title: '香港迪士尼乐园',
      category: '景点门票 & 表演',
      price: 418,
    },
    {
      title: '香港迪士尼乐园',
      category: '景点门票 & 表演',
      price: 418,
    },
    {
      title: '香港迪士尼乐园',
      category: '景点门票 & 表演',
      price: 418,
    }
  ];

  const sep = '>';
  const [_filterState, setFilterState] = useRecoilState<FilterState>(filterState);

  const {
    dates,
  } = _filterState;

  const onDatesChange = (dates: [Moment | null, Moment | null]) => {
    setFilterState({
      ..._filterState,
      dates,
    });
  };

  const isDayBlocked = (day: Moment): boolean => {
    if (!dayBlockedCache.has(day)) {
      const res = Math.floor(1.5 * day.month() + 6.7 * day.day() + 13.8 * day.week()) % 3 === 0;
      dayBlockedCache.set(day, res);
      return res;
    }
    return dayBlockedCache.get(day) || false;
  };

  const priceCache = new Map<Moment, number>();
  const getPrice = (day: Moment): number => {
    if (!priceCache.has(day)) {
      priceCache.set(day, Math.round(Math.random() * 100 + 100));
      // priceCache.set(day, Math.floor(Math.random () * 900) + 100);
    }
    return priceCache.get(day) || 0;
  };

  const renderDayContents = (day: Moment): React.ReactNode => {
    return <div className="day-content-wrapper">
      <div className='day-content-time'>{day.format('D')}</div>
      {isDayBlocked(day) ? null : <div className='day-content-price'>{getPrice(day)}</div>}
    </div>;
  };

  const [activeProgramIndex, setActiveProgramIndex] = useState<number>(-1);
  const onProgramClick = (i: number) => () => {
    if (!dates?.[0]) {
      setDateRangePickerOpen(true);
      return;
    }
    if (programDisabledIndexes.includes(i)) {
      return;
    }
    if (activeProgramIndex === i) {
      setActiveProgramIndex(-1);
    } else {
      setActiveProgramIndex(i);
    }
  };

  const [productItems, setProductItems] = useState<ProductItemProps[]>([
    {
      id: 'adult',
      name: '成人',
      price: 468,
      count: 0,
    },
    {
      id: 'child',
      name: '儿童（3-11岁）',
      price: 358,
      count: 0,
    },
    {
      id: 'senior',
      name: '老年（65岁及以上）',
      price: 82,
      count: 0,
    }
  ]);
  const onProductItemsChange = (items: ProductItemProps[]) => {
    setProductItems(items);
  };
  useEffect(() => {
    if (!dates?.[0]) {
      setActiveProgramIndex(-1);
    }
  }, [dates]);

  const [totalAmount, setTotalAmount] = useState<number>(4680);

  const [programDisabledIndexes, setProgramDisabledIndexes] = useState<number[]>([2]);
  useEffect(() => {
    if (!dates?.[0]) {
      setProgramDisabledIndexes([]);
    } else {
      setProgramDisabledIndexes([2]);
    }
  }, [dates]);

  const onClear = () => {
    setFilterState({
      ..._filterState,
      dates: [null, null],
    });
    setActiveProgramIndex(-1);
  };

  const [dateRangePickerOpen, setDateRangePickerOpen] = useState(false);

  const [isEdit, setIsEdit] = useState(false);
  useEffect(() => {
    if (window.location.search.includes('edit=')) {
      setIsEdit(true);
      setFilterState({
        ..._filterState,
        dates: [moment(), null],
      });
      setActiveProgramIndex(1);
    }
  }, []);

  //从子组件接受参数，根据参数类别滚动到选择方案模块或者查看地点模块
  const handleTurnType = (turnType:string) => {
    turnType == "location" 
    ? 
    locationRef.current?.scrollIntoView({behavior:'smooth',block:'start'})
    :
    programRef.current?.scrollIntoView({behavior:'smooth',block:'start'});
  }

  return <div className="product-detail">
    <ProductImageSlider
      images={images}
    />

    <Container>
      <Breadcrumb className="product-detail-breadcrumb" separator={<span style={{margin: '0 8px'}}>{sep}</span>}>
        {pathItems.map((path, i) => <BreadcrumbItem key={i}>
          <BreadcrumbLink>{path}</BreadcrumbLink>
        </BreadcrumbItem>)}
      </Breadcrumb>

      <div className="product-detail-container">
        <div className="product-detail-content">
          <div className="product-detail-title">
            {productTitle}
          </div>
          <div className="product-detail-subtitle">
            {productSubtitle}
          </div>
          <div className="sep-line"/>

          <div className="product-detail-features">
            {features.map((f, i) => <FeatureTag
              key={i}
              icon={f.icon}
              label={f.label}
              border={'none'}
            />)}
          </div>
          <div className="sep-line"/>

          <div className="product-detail-notice">
            <ul className="product-detail-notice-list">
              {notices.map((n, i) => <li key={i} className="product-detail-notice-item">
                {n}
              </li>)}
            </ul>
          </div>
        </div>

        <div className="product-detail-sidebar">
          <ProductBookingBox getTurnType = {handleTurnType} price={468}/>
        </div>
      </div>
    </Container>

    <Container>
      <div className="product-detail-container">
        <div className="product-detail-content">
          <div ref={programRef} className="product-detail-program">
            <div className="product-detail-common-title">
              方案选项
            </div>
            <div className="product-detail-program-box">
              <div className="product-detail-program-box-title">
                请选择日期、预订选项
              </div>
              <div className="product-detail-program-box-section">
                <div className="product-detail-program-box-label">
                  请选择预计兑换日期，预订时所选日期仅供参考
                </div>
                <div className="product-detail-program-box-list product-detail-program-box-select-date">
                  <DateRangePicker
                    dates={dates}
                    onChange={onDatesChange}
                    isDayBlocked={isDayBlocked}
                    renderDayContents={renderDayContents}
                    singleDate
                    open={dateRangePickerOpen}
                    onOpenChange={(open) => setDateRangePickerOpen(open)}
                    extra={<div className="extra-date-info">
                      <div>货币: ¥ CNY</div>
                      <div>当地时间</div>
                    </div>}
                  />
                  <Button className="btn plain" onClick={onClear}>清空</Button>
                </div>
              </div>

              <div className="product-detail-program-box-section">
                <div className="product-detail-program-box-label">
                  方案类型
                </div>
                <div className="product-detail-program-box-list">
                  {programs.map((p, i) => <div
                    key={i}
                    className={[
                      'product-detail-program-box-item',
                      activeProgramIndex === i ? 'selected' : '',
                      programDisabledIndexes.includes(i) ? 'disabled' : '',
                    ].filter(c => !!c).join(' ')}
                    onClick={onProgramClick(i)}
                  >
                    <div className="program-title">{p}</div>
                    {programDisabledIndexes.includes(i) ? <div className="disabled-notice">所选日期不可预定</div> : null}
                  </div>)}
                </div>
              </div>

              {activeProgramIndex > -1 ? <div className="product-detail-product-item-section">
                <ProductItemBox
                  items={productItems}
                  maxItemCount={0}
                  totalAmount={totalAmount}
                  onChange={onProductItemsChange}
                />
              </div> : null}

              {activeProgramIndex > -1 ? <div className="product-detail-actions-section">
                <div className="right">
                  <Button className="btn warning" onClick={() => navigate('/products/cart')}>
                    {isEdit ? '返回购物车' : '加入购物车'}
                  </Button>
                  <Button className="btn primary" onClick={() => navigate('/orders/submit')}>
                    {isEdit ? '确认修改' : '立即预定'}
                  </Button>
                </div>
              </div> : null}
            </div>
          </div>

          <div className="product-detail-description">
            <div className="product-detail-common-title">
              活动介绍
            </div>
            <div className="product-detail-description-content">
              <div className="product-detail-description-para">
                前往深受大人、小孩喜爱的奇妙王国「香港迪士尼乐园度假区」，置身梦幻迪士尼故事当中，与迪士尼卡通人物见面。乐园共有7个不同的主题园区，提供超过百项游乐设施及娱乐体验，而且还可以入住华丽舒适的迪士尼主题酒店！走进乐园，尽情探索各国丛林、游览神秘的博物馆，乘坐矿车飞越矿山，坐上小船环游缤纷世界，甚至坐上火箭，飞越太空！你更可率先欣赏全新面貌的「奇妙梦想城堡」。此外，乐园内各处设有「自拍点」，让你与喜爱的迪士尼卡通人物在适当的社交距离下自拍，留下难忘回忆。度假区内更有各式商店及餐厅可供选择，尽情挑选特色商品，戴上可爱头饰，开始一整日的玩乐吧！立即购买1日或2日门票，以优惠价格尽情狂欢！
              </div>
            </div>
          </div>
          <div ref={locationRef} className="product-detail-location">
            <div className="product-detail-common-title">
              地点
            </div>
            <div className="product-detail-location-content">
              <img className="product-detail-location-map" src={exampleLocation}/>
            </div>
          </div>
        </div>
        <div className={["product-detail-program-sidebar", activeProgramIndex > -1 ? "active" : null].join(' ') }>
          <div className='product-detail-program-sidebar-wrap'>
            <div className='product-detail-sidebar-title'>已选方案详情</div>
            <div className='product-detail-sidebar-content'>
              <div className="notice-item">
                <img className="icon" src={FlashIcon}/>
                <span className="text">立即确认并获得凭证，若售罄将取消</span>
              </div>
              <div className="notice-item">
                <img className="icon" src={CircleIcon}/>
                <span className="text">不支持退改</span>
              </div>
              <div className="notice-item">
                <img className="icon" src={CalendarIcon}/>
                <span className="text">有效期内任何一天使用</span>
              </div>
              <div className="notice-item">
                <img className="icon" src={ArchiveIcon}/>
                <span className="text">可出示手机电子凭证或打印凭证</span>
              </div>
              <div className="notice-item">
                <img className="icon" src={ReceiptIcon}/>
                <span className="text">必须提前兑换实体票券</span>
              </div>
            </div>
            <div className='product-detail-sidebar-tab'>
              <Tabs>
                <TabList>
                  <Tab>方案详情</Tab>
                  <Tab>使用条款</Tab>
                  <Tab>如何使用</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <h2 className='product-detail-sidebar-panel-title'>方案详情</h2>
                    <div className='product-detail-sidebar-panel-content'>
                      <div className='product-detail-sidebar-panel-content-list'>
                        <h3>费用包含</h3>
                        <ul>
                          <li>1张{programs[activeProgramIndex]}</li>
                        </ul>
                      </div>
                      <div className='product-detail-sidebar-panel-content-list'>
                        <h3>费用不包含</h3>
                        <ul>
                          <li>其他个人消费</li>
                        </ul>
                      </div>
                      <div className='product-detail-sidebar-panel-content-list'>
                        <h3>注意事项</h3>
                        <ul>
                          <li>为保持社交距离，乐园会控制入园人数。你需在到访乐园前14日内凭有效门票、会员卡、门票、换领凭证或确认通知预先透过此网页预约到访日子。重开初期，乐园将会实施一星期营运五天的安排，逢星期二和四 (公众假期及指定特别日子除外) 暂停开放，直至另行通知。详情请查看或 你购买的电子门票或门票换领凭证上注明的入园预约提醒信息及网站连结</li>
                        </ul>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <p>订单确认邮件将立即发送至电子邮箱，如未收到邮件，请查看垃圾邮箱或通过邮件联系客服!订单确认邮件将立即发送至电子邮箱，如未收到邮件，请查看垃圾邮箱或通过邮件联系客服!订单确认邮件将立即发送至电子邮箱，如未收到邮件，请查看垃圾邮箱或通过邮件联系客服!订单确认邮件将立即发送至电子邮箱，如未收到邮件，请查看垃圾邮箱或通过邮件联系客服!订单确认邮件将立即发送至电子邮箱，如未收到邮件，请查看垃圾邮箱或通过邮件联系客服!订单确认邮件将立即发送至电子邮箱，如未收到邮件，请查看垃圾邮箱或通过邮件联系客服!订单确认邮件将立即发送至电子邮箱，如未收到邮件，请查看垃圾邮箱或通过邮件联系客服!订单确认邮件将立即发送至电子邮箱，如未收到邮件，请查看垃圾邮箱或通过邮件联系客服!</p>
                  </TabPanel>
                  <TabPanel>
                    <p>如何使用如何使用,如何使用如何使用,如何使用如何使用如何使用如何使用如何使用如何使用如何使用如何使用如何使用如何使用如何使用如何使用如何使用如何使用如何使用如何使用如何使用如何使用如何使用如何使用如何使用如何使用如何使用如何使用如何使用如何使用如何使用如何使用如何使用如何使用如何使用如何使用如何使用如何使用如何使用如何使用如何使用如何使用如何使用如何使用如何使用如何使用如何使用如何使用如何使用如何使用如何使用如何使用如何使用如何使用如何使用如何使用如何使用如何使用如何使用如何使用如何使用如何使用如何使用如何使用如何使用如何使用如何使用如何使用如何使用如何使用如何使用如何使用如何使用如何使用如何使用如何使用如何使用如何使用如何使用</p>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </div>
          </div>
          <div className='collapsed-content' ref={btnRef} onClick={onOpen}>
              <span className='collapsed-content-text'>显示全部</span>
              <span className='collapsed-content-icon'></span>
          </div>
        </div>
        <Modal
          id="sidebar-detail-modal"
          onClose={onClose}
          finalFocusRef={btnRef}
          isOpen={isOpen}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalBody>
              <div className='sidebar-detail-modal-top'>
                <h2 className='sidebar-detail-modal-panel-title'>已选择方案详情</h2>
                <div className='sidebar-detail-program-box'>
                  <div className='program-title'>
                    {programs[activeProgramIndex]}
                  </div>
                </div>
                <div className='sidebar-detail-program-box-list'>
                  <div className='sidebar-detail-program-box-item'>
                    <img className="icon" src={CircleIcon}/>
                    <span className='text'>不支持退改</span>
                  </div>
                  <div className='sidebar-detail-program-box-item'>
                    <img className="icon" src={FlashIcon}/>
                    <span className='text'>立即确认并获得凭证，若售罄将取消</span>
                  </div>
                  <div className='sidebar-detail-program-box-item'>
                    <img className="icon" src={CalendarIcon}/>
                    <span className='text'>有效期内任何一天使用</span>
                  </div>
                </div>
                <div className='sidebar-detail-program-box-list'>
                  <div className='sidebar-detail-program-box-item'>
                      <img className="icon" src={ReceiptIcon}/>
                      <span className='text'>出示凭证入场/必须提前兑换实体票券</span>
                    </div>
                    <div className='sidebar-detail-program-box-item'>
                      <img className="icon" src={ArchiveIcon}/>
                      <span className='text'>可出示手机电子凭证或打印凭证</span>
                    </div>
                </div>
              </div>
              <div className='sidebar-detail-modal-scroll-wrap'>
                <h2 className='sidebar-detail-modal-scroll-title'>方案详情</h2>
                <div className='sidebar-detail-modal-scroll-content'>
                  <div className='sidebar-detail-modal-scroll-content-list'>
                    <h3>费用包含</h3>
                    <ul>
                      <li>1张{programs[activeProgramIndex]}</li>
                    </ul>
                  </div>
                  <div className='sidebar-detail-modal-scroll-content-list'>
                    <h3>费用不包含</h3>
                    <ul>
                      <li>其他个人消费</li>
                    </ul>
                  </div>
                  <div className='sidebar-detail-modal-scroll-content-list'>
                    <h3>注意事项</h3>
                    <ul>
                      <li>为保持社交距离，乐园会控制入园人数。你需在到访乐园前14日内凭有效门票、会员卡、门票、换领凭证或确认通知预先透过此网页预约到访日子。重开初期，乐园将会实施一星期营运五天的安排，逢星期二和四 (公众假期及指定特别日子除外) 暂停开放，直至另行通知。详情请查看或 你购买的电子门票或门票换领凭证上注明的入园预约提醒信息及网站连结</li>
                    </ul>
                  </div>
                </div>
                <h2 className='sidebar-detail-modal-scroll-title'>使用条款</h2>
                <div className='sidebar-detail-modal-scroll-content'>
                  <div className='sidebar-detail-modal-scroll-content-list'>
                    <h3>确认详情</h3>
                    <ul>
                      <li>订单确认邮件将立即发送至电子邮箱，如未收到邮件，请查看垃圾邮箱或通过邮件联系客服</li>
                    </ul>
                  </div>
                  <div className='sidebar-detail-modal-scroll-content-list'>
                    <h3>取消政策</h3>
                    <ul>
                      <li>此活动不受理订单修改、订单取消或退款</li>
                    </ul>
                  </div>
                </div>
                <h2 className='sidebar-detail-modal-scroll-title'>如何使用</h2>
                <div className='sidebar-detail-modal-scroll-content'>
                  <div className='sidebar-detail-modal-scroll-content-list'>
                    <h3>方式1</h3>
                    <ul>
                      <li>方式1详情描述......</li>
                    </ul>
                  </div>
                  <div className='sidebar-detail-modal-scroll-content-list'>
                    <h3>方式2</h3>
                    <ul>
                      <li>方式2详情描述......</li>
                    </ul>
                  </div>
                </div>
              </div>
            </ModalBody>
          </ModalContent>
        </Modal>
      </div>
      <div className="product-detail-nearby-products">
        <div className="product-detail-common-title">
          附近产品
        </div>
        <ProductList title={false} products={products} pagination={false} scrollable/>
      </div>

    </Container>

    <Cart/>
  </div>;
};

