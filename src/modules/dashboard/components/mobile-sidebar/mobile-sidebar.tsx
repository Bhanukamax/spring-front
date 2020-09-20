import classnames from 'classnames';
import Icon from 'components/icon';
import { closeSidebar } from 'modules/dashboard/redux/dashboard-slice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SidebarLink from '../sidebar-link';
import './mobile-sidebar.scss';

export default function MobileSidebar() {
  const isSidebarOpen = useSelector(
    (state: any) => state.dashboard.isMobileSidebarOpen
  );

  const dispatch = useDispatch();

  const classNames = classnames('mobile-sidebar', {
    'mobile-sidebar--closed': !isSidebarOpen,
    'mobile-sidebar--open': isSidebarOpen,
  });

  const handleOnClick = () => {
    dispatch(closeSidebar());
  };

  return (
    <div className={classNames}>
      <button onClick={handleOnClick} className='mobile-sidebar__close-button'>
        <Icon icon='times' className='mobile-sidebar__close-icon' />
      </button>
      <nav className=' '>
        <SidebarLink
          icon='home'
          to='/home'
          displayType='mobile'
          onClick={handleOnClick}
        >
          mobile Home
        </SidebarLink>
        <SidebarLink
          icon='file'
          to='/home/create-user'
          displayType='mobile'
          onClick={handleOnClick}
        >
          Create User
        </SidebarLink>
        <SidebarLink
          icon='logout'
          to='/logout'
          displayType='mobile'
          onClick={handleOnClick}
        >
          Log Out
        </SidebarLink>
      </nav>
    </div>
  );
}
