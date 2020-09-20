import Home from 'modules/dashboard/components/home';
import { updateUserListOnFetch } from 'modules/dashboard/redux/user-slice';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserService from 'services/user-service/user-service';

export default function HomeContainer() {
  const dispatch = useDispatch();

  const [users, departments] = useSelector((store: any) => [
    store.user.users,
    store.user.departments,
  ]);

  async function getUsers() {
    const userService = new UserService();
    const users = await userService.getUsers();

    dispatch(updateUserListOnFetch(users));
  }

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Home users={users} departments={departments} />;
}
