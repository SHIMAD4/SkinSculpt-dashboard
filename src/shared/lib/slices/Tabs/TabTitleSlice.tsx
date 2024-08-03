import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TitleType = {
  id: number;
  title: string;
};

type PayloadActionType = {
  targetText: string;
  parentText: string;
};

const defaultTab: string = localStorage.getItem('activeTab') || 'Сводка';
const tabsArray: TitleType[] = [
  { id: 1, title: 'Сводка' },
  { id: 2, title: 'Wildberries' },
  { id: 3, title: 'OZON' },
  { id: 4, title: 'Я. Маркет' },
];

// eslint-disable-next-line react-refresh/only-export-components
const TabTitleSlice = createSlice({
  name: 'tabs',
  initialState: {
    tabsArray,
    activeTab: defaultTab,
  },
  reducers: {
    handleClick(state, action: PayloadAction<PayloadActionType>) {
      const { targetText, parentText } = action.payload;

      if (targetText === parentText) return;

      state.activeTab = targetText;
      localStorage.setItem('activeTab', targetText);
    },
  },
});

export const { handleClick } = TabTitleSlice.actions;
export default TabTitleSlice.reducer;
