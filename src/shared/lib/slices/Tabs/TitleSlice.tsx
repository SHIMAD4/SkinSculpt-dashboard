import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TitleType, TitlePayloadActionType } from '@/shared/lib/types/Tabs/slicesTypes.tsx';
import { TABS } from '@/shared/lib/contants';

const defaultTab: string = localStorage.getItem('activeTab') || TABS.SUMMARY;
const tabsArray: TitleType[] = [
  { id: 1, title: TABS.SUMMARY },
  { id: 2, title: TABS.WILDBERRIES },
  { id: 3, title: TABS.OZON },
  { id: 4, title: TABS.YAMARKET },
];

const titleSlice = createSlice({
  name: 'tabsTitle',
  initialState: {
    tabsArray,
    activeTab: defaultTab,
  },
  reducers: {
    handleTabClick(state, { payload }: PayloadAction<TitlePayloadActionType>) {
      state.activeTab = payload.clickedTabText;
      localStorage.setItem('activeTab', payload.clickedTabText);
    },
  },
});

export const { handleTabClick } = titleSlice.actions;
export default titleSlice.reducer;
