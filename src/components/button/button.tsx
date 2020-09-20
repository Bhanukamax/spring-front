import classnames from 'classnames';
import React from 'react';
import './button.scss';

export type ButtonType = 'light' | 'green';
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: any;
  buttonType?: ButtonType;
  className?: string;
}

export default function Button({
  children,
  buttonType = 'light',
  className = '',
  ...rest
}: Props) {
  const classNames = classnames('button', className, {
    'button--green': buttonType === 'green',
  });

  return (
    <button className={classNames} {...rest}>
      {children}
    </button>
  );
}
