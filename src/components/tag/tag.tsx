import Icon from 'components/icon';
import React from 'react';
import './tag.scss';

interface Props {
  children: string;
}

export default function Tag({ children }: Props) {
  return (
    <span className='tag'>
      #{children}{' '}
      <button className='tag__close-button'>
        <Icon icon='times' />
      </button>
    </span>
  );
}
