import React from 'react';
import UserForm from '../user-form';
import './create-user-page.scss';

export default function CreateUserPage() {
  return (
    <>
      <div className='create-user-page'>
        <h1 className='create-user-page__title'>Create User</h1>
        <p className='create-user-page__sub-title'>
          Add users into the Springboard platform
        </p>
        <UserForm />
      </div>
    </>
  );
}
