import React from 'react';
import './login-page.scss';
import LoginForm from '../login-form';

export default function LoginPage() {
  return (
    <>
      <div className='login-page'>
        <h1 className='login-page__title'>Welcome to Springboard</h1>
        <p className='login-page__description'>Please login to continue</p>
        <LoginForm />
      </div>
    </>
  );
}
