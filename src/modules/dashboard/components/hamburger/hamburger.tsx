import Icon from 'components/icon';
import { toggleSidebar } from 'modules/dashboard/redux/dashboard-slice';
import React from 'react';
import { useDispatch } from 'react-redux';
import './hamburger.scss';

export default function Hamburger() {
  const dispatch = useDispatch();

  const onToggleSidebar = () => {
    dispatch(toggleSidebar());
  };

  return (
    <button className='hamburger' onClick={onToggleSidebar}>
      <Icon icon='bars' className='hamburger__icon' />
    </button>
  );
}
