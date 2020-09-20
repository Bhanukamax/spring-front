import Icon from 'components/icon';
import React from 'react';
import './user-menu.scss';

interface Props {
  userName: string;
}

export default function UserMenu({ userName }: Props) {
  return (
    <div className='user-menu'>
      <p className='user-menu__user-name'>{userName}</p>
      <span className='user-menu__circle'></span>
      <Icon icon='chevron-down' className='user-menu__chevron' />
    </div>
  );
}
