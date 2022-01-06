import React from 'react';
import './OrderContactInfoBox.scss';
import {Checkbox, FormControl, FormLabel, Input, Select,FormErrorMessage} from '@chakra-ui/react';
import { useForm } from "react-hook-form";

const OrderContactInfoBox: React.FC<OrderContactInfoBoxProps> = (props) => {
  const {readonly, contact, onChange} = props;

  const {
    setValue,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const onInput = (key: string) => (ev: React.ChangeEvent<HTMLInputElement>) => {
    const _contact = JSON.parse(JSON.stringify(contact));
    _contact[key] = ev.target.value;
    onChange?.(_contact);
  };

  return <div className="order-contact-info-box">
    <div className="order-contact-info-box-content">
      <div className="order-contact-info-box-title">
        <div className="title">联系人</div>
      </div>
      <div className="order-contact-info-box-form">
        <div className="row">
          <FormControl isRequired isInvalid={errors.givenName}>
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
        {readonly ? null :
          <div className="row">
            <Checkbox/>
            <span>同时更新资料</span>
          </div>}
      </div>
    </div>
  </div>;
};

export default OrderContactInfoBox;
