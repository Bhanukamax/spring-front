import { createSlice } from '@reduxjs/toolkit';

const sortDepartments = (a, b) => (a > b ? 1 : -1);
export const userSlice = createSlice({
  name: 'counter',
  initialState: {
    users: [],
    departments: [],
    notificationCount: 0,
  },
  reducers: {
    updateUserListOnFetch: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.users = action.payload;

      const map = {};

      action.payload.forEach((item) => {
        if (map[item.departmentName]) return;
        map[item.departmentName] = true;
      });

      state.departments = Object.keys(map)
        .map((item) => item)
        .sort(sortDepartments);
    },
    removeDeletedUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);

      const map = {};

      state.users.forEach((item) => {
        if (map[item.departmentName]) return;
        map[item.departmentName] = true;
      });

      state.departments = Object.keys(map)
        .map((item) => item)
        .sort(sortDepartments);
    },
    updateUserListOnCreate: (state, action) => {
      state.users = [...state.users, action.payload];

      const map = {};

      state.users.forEach((item) => {
        if (map[item.departmentName]) return;
        map[item.departmentName] = true;
      });

      state.departments = Object.keys(map).map((item) => item);

      state.notificationCount += 1;
    },
  },
});

export const {
  updateUserListOnFetch,
  removeDeletedUser,
  updateUserListOnCreate,
} = userSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const fetchedUsers = (users) => (dispatch) => {
  dispatch(updateUserListOnFetch(users));
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = (state) => state.counter.value;

export default userSlice.reducer;
