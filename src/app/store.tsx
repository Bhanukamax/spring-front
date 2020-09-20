import { configureStore } from '@reduxjs/toolkit';
import dashboardSlice from 'modules/dashboard/redux/dashboard-slice';
import userSlice from 'modules/dashboard/redux/user-slice';
import thunk from 'redux-thunk';

export default configureStore({
  reducer: {
    user: userSlice,
    dashboard: dashboardSlice,
  },
  middleware: [thunk],
});
