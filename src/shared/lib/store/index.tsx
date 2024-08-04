import { configureStore } from '@reduxjs/toolkit';
import TitleReducer from '../slices/Tabs/TitleSlice.tsx';
import ContentReducer from '../slices/Tabs/ContentSlice.tsx';
import ChartReducer from '../slices/Tabs/ChartSlice.tsx';

const store = configureStore({
  reducer: {
    tabsTitle: TitleReducer,
    tabsContent: ContentReducer,
    tabsChart: ChartReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
