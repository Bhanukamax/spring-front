import Icon from 'components/icon';
import React from 'react';
import './user-card.scss';

export interface UserCardInterface {
  firstName: string;
  lastName: string;
  userId: string;
}

interface Props extends UserCardInterface {
  onDelete: (id: any) => void;
}

export default function UserCard({
  firstName,
  lastName,
  userId,
  onDelete,
}: Props) {
  return (
    <div className='user-card'>
      <div className='user-card__header'>
        <div className='user-card__names'>
          <div className='user-card__first-name'>{firstName}</div>
          <div className='user-card__last-name'>{lastName}</div>
        </div>
        <button className='user-card__delete' onClick={() => onDelete(userId)}>
          <Icon icon='trash' />
        </button>
      </div>
      <div className='user-card__body'>
        <img
          className='user-card__image'
          src='https://spring-assets.s3.amazonaws.com/profile.jpg'
          alt='Profile'
        />
      </div>
    </div>
  );
}
