import { createSlice } from '@reduxjs/toolkit';
import { SummaryType } from '@/shared/lib/types/Tabs/slicesTypes.tsx';
import { WildberriesApi, OzonApi, YaMarketApi } from '@/shared/api';

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
    getSummaryData({ summary }) {
      summary.redemptions = '100 000₽';
      summary.ordersCount = '100 000';
      summary.deliveryIndex = '95%';
      summary.income = '1 000 000₽';
      summary.redemptionsCount = '58 000';
      summary.oneDayRedemptions = '50 000₽';
    },
    getWildberriesData({ summary }) {
      WildberriesApi.getSalesByRealization
        .getRealizationReport(
          { year: 2023, month: 12, day: 18 },
          { year: 2024, month: 8, day: 6 },
          100000,
        )
        .then((res) => res.data)
        .then((data) => console.log('WildberriesData:', data))
        .catch((err) => console.log('WildberriesApi:', err));

      summary.redemptions = '100 000₽';
      summary.ordersCount = '100 000';
      summary.deliveryIndex = '95%';
      summary.income = '1 000 000₽';
      summary.redemptionsCount = '58 000';
      summary.oneDayRedemptions = '50 000₽';
    },
    getOzonData({ summary }) {
      OzonApi.getSalesByRealization
        .get()
        .then((res) => console.log('OzonRes:', res))
        .catch((err) => console.log('OzonApi:', err));

      summary.redemptions = '100 000₽';
      summary.ordersCount = '100 000';
      summary.deliveryIndex = '95%';
      summary.income = '1 000 000₽';
      summary.redemptionsCount = '58 000';
      summary.oneDayRedemptions = '50 000₽';
    },
    getYaMarketData({ summary }) {
      YaMarketApi.getSalesByRealization
        .postRealizationReport()
        .then((res) => console.log('YaMarketRes:', res))
        .catch((err) => console.log('YaMarketApi:', err));

      // YaMarketApi.getSalesByRealization
      //   .getRealizationReport()
      //   .then((res) => console.log('YaMarketApi', res))
      //   .catch((err) => console.log('YaMarketApi', err));

      summary.redemptions = '100 000₽';
      summary.ordersCount = '100 000';
      summary.deliveryIndex = '95%';
      summary.income = '1 000 000₽';
      summary.redemptionsCount = '58 000';
      summary.oneDayRedemptions = '50 000₽';
    },
  },
});

export const { getSummaryData, getWildberriesData, getOzonData, getYaMarketData } =
  contentSlice.actions;
export default contentSlice.reducer;
