import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import userReducer from './Slice/userSlice';

const store = configureStore({
  reducer: {
    users: userReducer
  },
});

export default store;



export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>