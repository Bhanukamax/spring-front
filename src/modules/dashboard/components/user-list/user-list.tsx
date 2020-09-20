import UserCardContainer from 'modules/dashboard/containers/user-card-container';
import React from 'react';
import './user-list.scss';

interface Props {
  department: string;
  users: any[];
}

export default function UserList({ department, users }: Props) {
  return (
    <div className='user-list'>
      <h2 className='user-list__department'>{department}</h2>
      <div className='user-list__users'>
        {users.map(({ firstName, lastName, id }, index) => (
          <UserCardContainer
            key={index}
            firstName={firstName}
            lastName={lastName}
            userId={id}
          />
        ))}
      </div>
    </div>
  );
}
