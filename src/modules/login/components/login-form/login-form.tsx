import Button from 'components/button';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import AuthService from 'services/auth-service/auth-service';
import Input from '../../../../components/input';
import './login-form.scss';

export default function LoginForm() {
  const { register, handleSubmit, control, errors } = useForm();
  const history = useHistory();

  const [formError, setFormError] = useState('');

  const onSubmit = (data: any) => {
    const authService = new AuthService();
    try {
      authService.login(data);
      history.push('/home');
    } catch (e) {
      setFormError(e.message);
    }
  };

  return (
    <>
      <form className='login-form' onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          as={Input}
          icon='user'
          placeholder='Username'
          name='userName'
          register={register}
          defaultValue=''
          rules={{ required: true, minLength: '6' }}
          error={errors.userName}
        />
        <Controller
          control={control}
          as={Input}
          icon='lock'
          placeholder='Password'
          name='password'
          type='password'
          register={register}
          defaultValue=''
          rules={{ required: true, minLength: '6' }}
          error={errors.password}
        />
        {formError && <div className='login-form__error'>{formError}</div>}
        <div className='login-form__actions'>
          <div className='login-form__remember'>
            <input type='checkbox' id='remember_login' />{' '}
            <label htmlFor='remember_login'>Remember me</label>
          </div>
          <a href='#forgot' className='login-form__forgot'>
            Forgot password?
          </a>
        </div>
        <Button>Login</Button>
      </form>
    </>
  );
}
