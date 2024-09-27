// /packages/shared-state/features/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'balance',
  initialState: {
    value : 0
  },
  reducers: {
    setUser: (state) => {
      state.value += 1;
      
    },
    clearUser: (state) => {
      state.value -= 1;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
