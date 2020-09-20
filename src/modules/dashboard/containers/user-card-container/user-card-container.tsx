import UserCard, {
  UserCardInterface,
} from 'modules/dashboard/components/user-card/user-card';
import { removeDeletedUser } from 'modules/dashboard/redux/user-slice';
import React from 'react';
import { useDispatch } from 'react-redux';
// import { removeDeletedUser } from 'modules/dashboard/redux/userSlice';
import UserService from 'services/user-service/user-service';

interface Props extends UserCardInterface {}
export default function UserCardContainer(props: Props) {
  const dispatch = useDispatch();

  const deleteUser = async (id: any) => {
    const userService = new UserService();
    dispatch(removeDeletedUser(id));
    await userService.deleteUser(id);
  };

  const handleOnDelete = (id: any) => {
    deleteUser(id);
  };

  return <UserCard {...props} onDelete={handleOnDelete} />;
}
