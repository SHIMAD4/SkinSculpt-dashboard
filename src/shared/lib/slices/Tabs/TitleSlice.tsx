import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TitleType, TitlePayloadActionType } from '@/shared/lib/types/Tabs/slicesTypes.tsx';

const defaultTab: string = localStorage.getItem('activeTab') || 'Сводка';
const tabsArray: TitleType[] = [
  { id: 1, title: 'Сводка' },
  { id: 2, title: 'Wildberries' },
  { id: 3, title: 'OZON' },
  { id: 4, title: 'Я. Маркет' },
];

const titleSlice = createSlice({
  name: 'tabsTitle',
  initialState: {
    tabsArray,
    activeTab: defaultTab,
  },
  reducers: {
    handleTabClick(state, { payload }: PayloadAction<TitlePayloadActionType>) {
      const { targetText, parentText } = payload;

      if (targetText === parentText) return;

      state.activeTab = targetText;
      localStorage.setItem('activeTab', targetText);
    },
  },
});

export const { handleTabClick } = titleSlice.actions;
export default titleSlice.reducer;
