import { createSlice } from '@reduxjs/toolkit';

export const dashboardSlice = createSlice({
  name: 'counter',
  initialState: {
    isSidebarOpen: true,
    isMobileSidebarOpen: false,
  },
  reducers: {
    closeSidebar: (state) => {
      state.isSidebarOpen = false;
      state.isMobileSidebarOpen = false;
    },
    openSidebar: (state) => {
      state.isSidebarOpen = true;
      state.isMobileSidebarOpen = true;
    },
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
      state.isMobileSidebarOpen = !state.isMobileSidebarOpen;
    },
  },
});

export const {
  closeSidebar,
  openSidebar,
  toggleSidebar,
} = dashboardSlice.actions;

export const isSidebarOpen = (state) => state.isSidebarOpen;

export default dashboardSlice.reducer;
