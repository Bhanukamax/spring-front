import classnames from 'classnames';
import React from 'react';
import { useSelector } from 'react-redux';
import Bell from '../bell';
import Hamburger from '../hamburger';
import SearchBar from '../search-bar';
import UserMenu from '../user-menu';
import './header.scss';

interface Props {
  className?: string;
}

export default function Header({ className = '' }: Props) {
  const notificationCount = useSelector(
    (store: any) => store.user.notificationCount
  );

  const classNames = classnames('header', className);
  return (
    <header className={classNames}>
      <Hamburger></Hamburger>
      <SearchBar />
      <div className='header__actions'>
        <Bell count={notificationCount} />
        <UserMenu userName={'Bhanuka'} />
      </div>
    </header>
  );
}
