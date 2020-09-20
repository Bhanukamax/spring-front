import Button from 'components/button';
import Input from 'components/input';
import TagInput from 'components/tag-input';
import { updateUserListOnCreate } from 'modules/dashboard/redux/user-slice';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import UserService from 'services/user-service/user-service';
import './user-form.scss';

export default function UserForm() {
  const { register, handleSubmit, errors, control, reset } = useForm();
  const [roles, setRoles] = useState([]);
  const dispatch = useDispatch();

  const onSubmit = async (data: any) => {
    const userService = new UserService();
    try {
      const res = await userService.createUser({ ...data, roles });
      dispatch(updateUserListOnCreate(res));
      reset({});
      setRoles([]);
    } catch (e) {
      console.log('Error', e.message);
    }
  };

  const handleUserRolesChange = (tags: any) => {
    setRoles(tags);
  };

  return (
    <>
      <form
        className='user-form'
        onSubmit={handleSubmit(onSubmit)}
        onReset={reset}
      >
        <div className='user-form__input-group'>
          <Controller
            as={Input}
            control={control}
            register={register}
            rules={{ required: true }}
            className='user-form__input'
            inputType='simple'
            name='firstName'
            error={errors.firstName}
            placeholder='First Name'
            defaultValue=''
          />

          <Controller
            as={Input}
            control={control}
            register={register}
            rules={{ required: true }}
            className='user-form__input'
            inputType='simple'
            name='lastName'
            error={errors.lastName}
            placeholder='Last Name'
            defaultValue=''
          />

          <Controller
            as={Input}
            control={control}
            register={register}
            rules={{ required: true }}
            className='user-form__input'
            inputType='simple'
            error={errors.email}
            name='email'
            icon='envelope'
            placeholder='Email Address'
            defaultValue=''
          />

          <Controller
            as={Input}
            control={control}
            register={register}
            rules={{ required: true }}
            className='user-form__input'
            inputType='simple'
            error={errors.departmentName}
            name='departmentName'
            icon='users'
            defaultValue=''
            placeholder='Department Name'
          />
        </div>
        <TagInput
          label='User Roles'
          tags={roles}
          onChange={handleUserRolesChange}
        />
        <Button buttonType='green'>Create</Button>
      </form>
    </>
  );
}
