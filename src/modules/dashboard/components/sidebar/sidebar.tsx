import classnames from 'classnames';
import React from 'react';
import { useSelector } from 'react-redux';
import SidebarLink from '../sidebar-link';
import './sidebar.scss';

interface Props {
  className?: string;
}

export default function Sidebar({ className = '' }: Props) {
  const isSidebarOpen = useSelector(
    (state: any) => state.dashboard.isSidebarOpen
  );
  const classNames = classnames('sidebar', className, {
    'sidebar--closed': !isSidebarOpen,
    'sidebar--open': isSidebarOpen,
  });
  return (
    <div className={classNames}>
      <div className='sidebar__top'></div>
      <nav className='sidebar__nav '>
        <SidebarLink icon='home' to='/home'>
          mobile Home
        </SidebarLink>
        <SidebarLink icon='file' to='/home/create-user'>
          Create User
        </SidebarLink>
        <SidebarLink icon='logout' to='/logout'>
          Log Out
        </SidebarLink>
      </nav>
    </div>
  );
}
