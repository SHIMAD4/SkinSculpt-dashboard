import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ContentPayloadActionType, SummaryType } from '@/shared/lib/types/Tabs/slicesTypes.tsx';

const summary: SummaryType = {
  redemptions: '0₽',
  ordersCount: '0',
  deliveryIndex: '0%',
  income: '0₽',
  redemptionsCount: '0',
  oneDayRedemptions: '0₽',
};

const contentSlice = createSlice({
  name: 'tabsContent',
  initialState: {
    summary,
  },
  reducers: {
    getContentData({ summary }, { payload }: PayloadAction<ContentPayloadActionType>) {
      // TODO: Запрашивать данные из API под каждый МП
      if (payload.marketTitle) {
        summary.redemptions = '100₽';
        summary.ordersCount = '10';
        summary.deliveryIndex = '10%';
        summary.income = '10₽';
        summary.redemptionsCount = '10';
        summary.oneDayRedemptions = '10₽';
      }
    },
  },
});

export const { getContentData } = contentSlice.actions;
export default contentSlice.reducer;
