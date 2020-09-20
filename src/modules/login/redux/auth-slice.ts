import { createSlice } from '@reduxjs/toolkit';
import AuthService, {
  AuthStorageKeys,
} from 'services/auth-service/auth-service';
import { StorageService } from 'services/storage-service/storage-service';

export const authSlice = createSlice({
  name: 'counter',
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    login: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const isLoggedInSelector = (state: any) => {
  const storage = new StorageService();
  const auth = new AuthService();
  if (storage.hasItem(AuthStorageKeys.IS_LOGGED_IN)) return auth.isLoggedIn();
  return state.isLoggedIn;
};

export default authSlice.reducer;
