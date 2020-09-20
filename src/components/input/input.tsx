import classnames from 'classnames';
import Icon, { IconTypes } from 'components/icon/icon';
import React from 'react';
import './input.scss';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: IconTypes;
  inputType?: 'boxed' | 'simple';
  register?: any;
  error?: boolean;
}

function getRandomNumber() {
  return Math.floor(new Date().getTime() * Math.random()).toString();
}

export default function Input({
  icon = 'user',
  className = '',
  placeholder = '',
  id = getRandomNumber(),
  inputType = 'boxed',
  register = null,
  error = false,
  ...rest
}: Props) {
  const classNames = classnames('input', className, {
    'input--simple': inputType === 'simple',
  });
  return (
    <div className={classNames}>
      <div className='input__container'>
        <label htmlFor={id}>
          <Icon icon={icon} />
        </label>
        <input
          ref={register}
          className='input__input'
          id={id}
          placeholder={placeholder}
          {...rest}
        />
      </div>
      {error && <p className='input__error'>{placeholder} is required</p>}
    </div>
  );
}
