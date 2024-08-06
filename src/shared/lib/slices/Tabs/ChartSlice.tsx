import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ChartType, ContentPayloadActionType } from '@/shared/lib/types/Tabs/slicesTypes.tsx';
import { TABS } from '@/shared/lib/contants';

const chart: ChartType = {
  xAxisData: [1, 2, 3, 4, 5, 6, 7],
  seriesData: [
    {
      id: 'Sells',
      label: 'Выкуп',
      data: [],
      color: 'rgba(100, 149, 237, 1)',
    },
    {
      id: 'Summary',
      label: 'Прибыль',
      data: [],
      color: 'rgba(127, 199, 255, 0.6)',
      area: true,
      showMark: false,
    },
  ],
};

const chartSlice = createSlice({
  name: 'tabsContent',
  initialState: {
    chart,
  },
  reducers: {
    getChartData(state, { payload }: PayloadAction<ContentPayloadActionType>) {
      console.log(payload.marketTitle);

      // TODO: Расчитывать график из API под каждый МП
      switch (payload.marketTitle) {
        case TABS.SUMMARY:
          state.chart.seriesData[0].data = [2, 4, 6, 8, 10, 12, 14];
          state.chart.seriesData[1].data = [1, 3, 5, 7, 9, 11, 13];
          break;
        case TABS.WILDBERRIES:
          state.chart.seriesData[0].data = [2, 5, 2, 10, 1, 5, 2];
          state.chart.seriesData[1].data = [2, 5, 2, 10, 1, 5, 2];
          break;
        case TABS.OZON:
          state.chart.seriesData[0].data = [5, 2, 5, 2, 10, 3, 15];
          state.chart.seriesData[1].data = [2, 5, 2, 10, 1, 5, 2];
          break;
        case TABS.YAMARKET:
          state.chart.seriesData[0].data = [15, 0, 10, 5, 10, 5, 5];
          state.chart.seriesData[1].data = [1, 10, 5, 3, 15, 4, 2];
          break;
      }
    },
  },
});

export const { getChartData } = chartSlice.actions;
export default chartSlice.reducer;
