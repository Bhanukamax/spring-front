import classnames from 'classnames';
import Icon, { IconTypes } from 'components/icon/icon';
import React from 'react';
import { NavLink as Link, NavLinkProps } from 'react-router-dom';
import './sidebar-link.scss';

export type DisplayType = 'mobile' | 'desktop';
interface Props extends NavLinkProps {
  icon: IconTypes;
  children: string;
  displayType?: DisplayType;
}
export default function SidebarLink({
  icon,
  children,
  displayType = 'desktop',
  ...rest
}: Props) {
  const classNames = classnames('sidebar-link', {
    'sidebar-link--mobile': displayType === 'mobile',
  });
  return (
    <Link
      {...rest}
      className={classNames}
      exact={true}
      activeClassName='sidebar-link--active'
    >
      <Icon icon={icon} className='sidebar-link__icon' />
      <p>{children}</p>
    </Link>
  );
}
