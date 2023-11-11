import React from 'react';
import Input from './UI/Input';
import Button from './UI/Button';
import { useInput } from '../Hooks/UseInput';

const Form = () => {
  const {
    value: firstNameValue,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    valueBlurHandler: firstNameBlurHandler,
  } = useInput((value) => value.trim() !== '');
  const {
    value: lastNameValue,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    valueBlurHandler: lastNameBlurHandler,
  } = useInput((value) => value.trim() !== '');
  const {
    value: emailValue,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
  } = useInput((value) => value.includes('@') && value.trim().length > 3);
  const {
    value: password,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    valueBlurHandler: passwordBlurHandler,
  } = useInput((value) => value.trim() !== '');
  return (
    <div className="bg-white md:min-w-[460px] p-8 rounded-xl shadow-xl">
      <Input
        type="text"
        name="FirstName"
        placeholder="First Name"
        val={firstNameValue}
        onChangeHandler={firstNameChangeHandler}
        onBlurHandler={firstNameBlurHandler}
        hasError={firstNameHasError}
      />
      <Input
        type="text"
        name="lastName"
        placeholder="Last Name"
        val={lastNameValue}
        onChangeHandler={lastNameChangeHandler}
        onBlurHandler={lastNameBlurHandler}
        hasError={lastNameHasError}
      />
      <Input
        type="email"
        name="email"
        placeholder="Email"
        val={emailValue}
        onChangeHandler={emailChangeHandler}
        onBlurHandler={emailBlurHandler}
        hasError={emailHasError}
      />
      <Input
        type={'password'}
        name="password"
        placeholder="Password"
        val={password}
        onChangeHandler={passwordChangeHandler}
        onBlurHandler={passwordBlurHandler}
        hasError={passwordHasError}
      />
      <Button text="Claim your free trial" />
      <p className="text-[#b9b6d3] mt-3 text-[9px] md:text-[11px] text-center m-auto w-3/4 md:w-11/12">
        By clicking the button, you are agreeing to our{' '}
        <span className="text-[#ff7a7a]">Terms and Services</span>
      </p>
    </div>
  );
};

export default Form;
