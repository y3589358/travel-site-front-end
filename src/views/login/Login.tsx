import React, {useState} from 'react';
import './Login.scss';
import background from './background.png';
import forgetPassword from './forgetPassword.png';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Checkbox, 
  Input, 
  InputGroup, 
  FormControl, 
  FormErrorMessage, 
  InputRightElement, 
  Link
} from '@chakra-ui/react';
import { useForm } from "react-hook-form";
import PhoneIcon from '../../assets/icons/PhoneIcon.svg';
import EyeCrossed from '../../assets/icons/EyeCrossed.svg';
import Eye from '../../assets/icons/Eye.svg';
import {useNavigate} from 'react-router-dom';

export default () => {
  const navigate = useNavigate();
  const [hidePassword, setHidePassword] = useState(true);
  const [isOpen,toggleModle] = useState(false);
  const {
    trigger,
    setValue,
    getValues,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const onClickLogin = ()=>{
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        !errors.passWord && !errors.phoneNumber && getValues("passWord") && getValues("phoneNumber") 
        ? navigate('/') : navigate("/login");
      }, 1000);
    });
  }

  return <div className="login-page">
    <Modal id='login-page-foget-password-modal' isOpen={isOpen} onClose={()=>toggleModle} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
              <div 
                className='title-icon' 
                style={{
                backgroundImage: `url(${forgetPassword})`
              }}>
              </div>
              <div className='title-text'>forget Password</div>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          Please contact the customer service number (601) 706-9652, there will be special service
          </ModalBody>
          <ModalFooter>
            <Button className='cancle'  mr={3} onClick={()=>toggleModle(!isOpen)}>cancle</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    <div
      className="background-wrapper"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="background-mask"/>
    </div>
    <div className="login-form-wrapper">
      <div className="login-form-intro">
      For your <br></br>
      better travel
      </div>
      <div className="login-form">
        <div className="login-form-content">
          <div className="login-form-title">
            Login
          </div>
          <form>
              <InputGroup className={["login-form-input-group", errors.phoneNumber ? "hasError" : null].join(' ') }>
                <InputRightElement className="login-form-input-icon" children={<img src={PhoneIcon}/>}/>
                <FormControl  isInvalid={errors.phoneNumber}>
                  <Input className="login-form-input" placeholder="phone number"
                    {...register(
                      "phoneNumber", {
                        required:true,
                        pattern: {
                          value: /^1[3-9]\d{9}$/,
                          message:"wrong phone number"
                        }
                      }
                    )}
                    onChange={(e) => {
                      setValue('phoneNumber', e.target.value, {
                        shouldValidate: true,
                        shouldDirty: true,
                        shouldTouch:false
                      });
                    }}
                  />
                  <FormErrorMessage>
                    {errors.phoneNumber?.type === "required" && "phone number can not be empty"}
                    {errors.phoneNumber?.type === "pattern" && errors.phoneNumber?.message}
                  </FormErrorMessage>
                </FormControl>
              </InputGroup>
              <InputGroup className={["login-form-input-group", errors.passWord ? "hasError" : null].join(' ') }>
                <InputRightElement
                  className="login-form-input-icon"
                  children={<img
                    src={hidePassword ? EyeCrossed : Eye}
                    onClick={() => setHidePassword(!hidePassword)}
                  />}
                />
                <FormControl isInvalid={errors.passWord}>
                  <Input
                    type={hidePassword ? 'password' : undefined}
                    className="login-form-input"
                    placeholder="password"
                    {...register(
                      "passWord", {
                        required:true
                      }
                    )}
                    onChange={(e) => {
                      setValue('passWord', e.target.value, {
                        shouldValidate: true,
                        shouldDirty: true,
                        shouldTouch:false
                      });
                    }}
                  />
                  <FormErrorMessage>
                    {errors.passWord?.type === "required" && "password can not be empty"}
                    {errors.passWord?.type === "pattern" && errors.passWord?.message}
                  </FormErrorMessage>
                </FormControl>
              </InputGroup>
              
            <Button type="button" isLoading ={isSubmitting} className="login-form-submit" 
              onClick = {()=> trigger(["phoneNumber","passWord"]).then( ()=> onClickLogin())}
            >
              Login
            </Button>
          </form>
          <div className="login-form-actions">
            <Checkbox className="login-form-remember">remember account</Checkbox>
            <Link onClick={ ()=> toggleModle(!isOpen) } className="login-form-forgot-password">forgot password?</Link>
          </div>
          <Button className="login-form-register">
            Haven't you registered yet?
          </Button>
          <div className='login-form-service-term'>By becoming a utrip user, you agree to the terms of service of the utrip</div>
        </div>
      </div>
    </div>
  </div>;
};
