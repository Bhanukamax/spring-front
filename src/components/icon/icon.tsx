import {
  faBars,
  faBell,
  faChevronDown,
  faEnvelope,
  faFileAlt,
  faHome,
  faLock,
  faSearch,
  faSignOutAlt,
  faTimes,
  faTrashAlt,
  faUser,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames';
import React from 'react';
import './icon.scss';

export type IconTypes =
  | 'chevron-down'
  | 'search'
  | 'times'
  | 'envelope'
  | 'bell'
  | 'trash'
  | 'logout'
  | 'user'
  | 'users'
  | 'lock'
  | 'bars'
  | 'home'
  | 'file';

interface Props {
  icon: IconTypes;
  className?: string;
}
export default function Icon({ icon, className = '' }: Props) {
  const classNames = classnames('sb-icon', className);

  let faIcon = null;

  switch (icon) {
    case 'user':
      faIcon = faUser;
      break;
    case 'lock':
      faIcon = faLock;
      break;
    case 'bars':
      faIcon = faBars;
      break;
    case 'home':
      faIcon = faHome;
      break;
    case 'file':
      faIcon = faFileAlt;
      break;
    case 'logout':
      faIcon = faSignOutAlt;
      break;
    case 'trash':
      faIcon = faTrashAlt;
      break;
    case 'bell':
      faIcon = faBell;
      break;
    case 'envelope':
      faIcon = faEnvelope;
      break;
    case 'users':
      faIcon = faUsers;
      break;
    case 'times':
      faIcon = faTimes;
      break;
    case 'search':
      faIcon = faSearch;
      break;
    case 'chevron-down':
      faIcon = faChevronDown;
      break;
    default:
      faIcon = faUser;
  }
  return <FontAwesomeIcon className={classNames} icon={faIcon} />;
}
