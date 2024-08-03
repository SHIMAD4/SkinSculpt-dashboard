import { configureStore } from '@reduxjs/toolkit';
import TitleReducer from '../slices/Tabs/TabTitleSlice.tsx';

const store = configureStore({
  reducer: {
    tabs: TitleReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
