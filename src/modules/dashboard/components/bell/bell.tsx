import Icon from 'components/icon';
import React from 'react';
import './bell.scss';

interface Props {
  count: number;
}
export default function Bell({ count }: Props) {
  return (
    <div className='notifications'>
      <Icon icon='bell' className='notifications__bell' />
      {(count && <div className='notifications__count'>{count}</div>) || ''}
    </div>
  );
}
