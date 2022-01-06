import React, {useState} from 'react';
import './OrderTravelInfoBox.scss';
import exampleTravelInfoBoxImage from './exampleTravelInfoBoxImage.png';
import {Checkbox, FormControl, FormLabel, Input,FormErrorMessage} from '@chakra-ui/react';
import Select, { Option } from 'rc-select';
import '../select/select.scss'
import { useForm } from "react-hook-form";
import QuestionMarkCircleIcon from '../../assets/icons/QuestionMarkCircleIcon.svg';
 
const OrderTravelInfoBox: React.FC<OrderTravelInfoBoxProps> = (props) => {
  const {
    readonly,
    contact,
    orderNo,
    orderStatus,
    onChange,
    onFrequentTravellerChange: _onFrequentTravellerChange,
  } = props;

  const {
    setValue,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const notices = [
    '方案类型：普通日子1日门票',
    '产品数量：成人 x 1 / 儿童 ( 3-11岁) x 2 ',
    '出游日期：2021年12月18日',
  ];

  const getOrderStatusClassName = () => {
    if (!orderStatus) return '';
    if (orderStatus === '待确认') return 'tbc';
    if (orderStatus === '确认中') return 'confirmed';
    return '';
  };

  const [frequentTraveller, setFrequentTraveller] = useState('');
  const onFrequentTravellerChange = (ev: any) => {
    setFrequentTraveller(ev);
    _onFrequentTravellerChange?.(ev);
  };

  const onInput = (key: string) => (ev: React.ChangeEvent<HTMLInputElement>) => {
    const _contact = JSON.parse(JSON.stringify(contact));
    _contact[key] = ev.target.value;
    onChange?.(_contact);
  };

  const onSelect = (key: string) => (ev: any) => {
    const _contact = JSON.parse(JSON.stringify(contact));
    _contact[key] = ev;
    onChange?.(_contact);
  };

  const [isSave, setIsSave] = useState(false);
  const onSaveChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setIsSave(ev.target.checked);
  };
  
  const incidencesStateResource = [
    { value: "1", label: 'Daming / Wang' },
    { value: "2", label: 'SiaoMing / Wang' },
    { value: "3", label: 'JhongMing / Wang' },
  ];
  
  const sorterByLabel = (optionA:any, optionB:any) => optionA.label.localeCompare(optionB.label);

  return <div className="order-travel-info-box">
    {!orderNo ? null :
      <div className="order-travel-info-box-order">
        <div className="order-no">
          <span className="label">订单号</span>
          <span className="value">{orderNo}</span>
        </div>
        <div className={[
          'order-status',
          getOrderStatusClassName(),
        ].filter(c => !!c).join(' ')}>
          {orderStatus}
        </div>
        {orderStatus === '确认中' ? null :
          <div className="cancel-policy">
          <span className="icon">
            <img src={QuestionMarkCircleIcon}/>
          </span>
            <span className="text">不可取消政策</span>
          </div>}
      </div>}
    <div className="order-travel-info-box-product">
      <div className="order-travel-info-box-product-image">
        <img src={exampleTravelInfoBoxImage}/>
      </div>
      <div className="order-travel-info-box-product-info-wrapper">
        <div className="order-travel-info-box-product-info">
          <div className="order-travel-info-box-product-title">
            香港迪士尼乐园门票
          </div>
          <div className="order-travel-info-box-product-notice-list">
            {notices.map((d, i) => <div key={i} className="order-travel-info-box-product-notice-item">
              {d}
            </div>)}
          </div>
        </div>
      </div>
    </div>
    <div className="order-travel-info-box-content">
      <div className="order-travel-info-box-title">
        <div className="title">出行人 (主要)</div>
        {readonly ? null :
          <div className="frequent-traveller">
            <span className="frequent-traveller-title">常旅客</span>
            <Select
              placeholder="请选择"
              onChange={onFrequentTravellerChange}
              showSearch
              filterSort={sorterByLabel}
              optionFilterProp="label"
              options={incidencesStateResource}
            ></Select>
          </div>}
      </div>
      <div className="order-travel-info-box-form">
        <div className="row">
          <FormControl isRequired isInvalid={errors.givenName}>
            {/* <FormControl isRequired> */}
            <div className='label-error-wrap'>
              <FormLabel>名</FormLabel>
              <FormErrorMessage>
                {errors.givenName?.type === "required" && "名不能为空"}
                {errors.givenName?.type === "pattern" && errors.givenName?.message}
              </FormErrorMessage>
            </div>
            {readonly ? <span>{contact.givenName}</span> :
              <Input placeholder="拼音 例: Fang" value={contact.givenName} onInput={onInput('givenName')}
                {...register(
                  "givenName", {
                    required:true,
                    pattern: {
                      value: /^[\u4e00-\u9fa5a-zA-Z]{1,10}$/,
                      message:"请输入正确的名"
                    }
                  }
                )}
                onChange={(e) => {
                  setValue('givenName', e.target.value, {
                    shouldValidate: true,
                    shouldDirty: true,
                    shouldTouch:false
                  });
                }}
              />}
          </FormControl>
          <FormControl isRequired isInvalid={errors.lastName}>
            <div className='label-error-wrap'>
              <FormLabel>姓</FormLabel>
              <FormErrorMessage>
                {errors.lastName?.type === "required" && "姓不能为空"}
                {errors.lastName?.type === "pattern" && errors.lastName?.message}
              </FormErrorMessage>
            </div>
            {readonly ? <span>{contact.lastName}</span> :
              <Input placeholder="拼音 例: Cheng" value={contact.lastName} onInput={onInput('lastName')}
                {...register(
                  "lastName", {
                    required:true,
                    pattern: {
                      value: /^[\u4e00-\u9fa5a-zA-Z]{1,10}$/,
                      message:"请输入正确的姓"
                    }
                  }
                )}
                onChange={(e) => {
                  setValue('lastName', e.target.value, {
                    shouldValidate: true,
                    shouldDirty: true,
                    shouldTouch:false
                  });
                }}
              />}
          </FormControl>
        </div>
        <div className="row">
          <FormControl isRequired isInvalid={errors.email}>
            <div className='label-error-wrap'>
              <FormLabel>邮箱</FormLabel>
              <FormErrorMessage>
                {errors.email?.type === "required" && "邮箱不能为空"}
                {errors.email?.type === "pattern" && errors.email?.message}
              </FormErrorMessage>
            </div>
            {readonly ? <span>{contact.email}</span> :
              <Input placeholder="请输入邮箱" value={contact.email} onInput={onInput('email')}
                {...register(
                  "email", {
                    required:true,
                    pattern: {
                      value: /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/,
                      message:"请输入正确的邮箱"
                    }
                  }
                )}
                onChange={(e) => {
                  setValue('email', e.target.value, {
                    shouldValidate: true,
                    shouldDirty: true,
                    shouldTouch:false
                  });
                }}
              />}
          </FormControl>
          <FormControl isRequired isInvalid={errors.phone}>
            <div className='label-error-wrap'>
              <FormLabel>电话号码</FormLabel>
              <FormErrorMessage>
                {errors.phone?.type === "required" && "电话号码不能为空"}
                {errors.phone?.type === "pattern" && errors.phone?.message}
              </FormErrorMessage>
            </div>
            {readonly ? <span>{contact.phone}</span> :
              <Input placeholder="请输入电话号码" value={contact.phone} onInput={onInput('phone')}
                {...register(
                  "phone", {
                    required:true,
                    pattern: {
                      value: /^1[3-9]\d{9}$/,
                      message:"请输入正确的电话号码"
                    }
                  }
                )}
                onChange={(e) => {
                  setValue('phone', e.target.value, {
                    shouldValidate: true,
                    shouldDirty: true,
                    shouldTouch:false
                  });
                }}
              />}
          </FormControl>
        </div>
        <div className="row">
          <FormControl isRequired className='select-nationality'>
            <FormLabel>国籍</FormLabel>
            {readonly ? <span>{contact.nationality}</span> :
              <Select 
                placeholder="请选择国籍" 
                defaultValue={contact.nationality}
                onChange={onSelect('nationality')}>
                <option value="中国">中国</option>
              </Select>
              }
          </FormControl>
        </div>
        {readonly ? null :
          <div className="row">
            <Checkbox
              className={isSave ? 'checked' : ''}
              isChecked={isSave}
              onChange={onSaveChange}
            />
            <span>保存信息于下次使用</span>
          </div>}
      </div>
    </div>
  </div>;
};

export default OrderTravelInfoBox;
