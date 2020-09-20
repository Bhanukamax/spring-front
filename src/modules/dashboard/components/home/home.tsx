import React from 'react';
import UserList from '../user-list/user-list';

interface Props {
  users: any[];
  departments: string[];
}

export default function Home({ users, departments }: Props) {
  /**
   * TODO:
   * list users by Departments
   * Add users
   * DELETE users
   * Show notification
   * hamburgur menu
   * validation
   */

  return (
    <>
      {departments.map((department, index) => (
        <UserList
          key={index}
          department={department}
          users={users.filter((user) => user.departmentName === department)}
        />
      ))}
    </>
  );
}
