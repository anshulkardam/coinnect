// /packages/shared-state/store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './src/userSlice';

export const store = configureStore({
  reducer: {
    uses: userReducer,
  },
});

export default store;
