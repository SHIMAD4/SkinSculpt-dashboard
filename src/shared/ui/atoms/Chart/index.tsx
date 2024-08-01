import { FC } from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

export type ChartProps = {
  marketTitle: 'Wildberries' | 'Ozon' | 'Ya.Market' | 'Summary';
};

export const Chart: FC<ChartProps> = ({ marketTitle }) => {
  const xAxisData: number[] = [1, 2, 3, 4, 5, 6, 7];
  let seriesData: number[][] = [[], []];

  // TODO: Убрать пример
  switch (marketTitle) {
    case 'Summary':
      seriesData = [
        [2, 4, 6, 8, 10, 12, 14],
        [1, 3, 5, 7, 9, 11, 13],
      ];
      break;
    case 'Wildberries':
      seriesData = [
        [2, 5, 2, 10, 1, 5, 2],
        [2, 5, 2, 10, 1, 5, 2],
      ];
      break;
    case 'Ozon':
      seriesData = [
        [5, 2, 5, 2, 10, 3, 15],
        [2, 5, 2, 10, 1, 5, 2],
      ];
      break;
    case 'Ya.Market':
      seriesData = [
        [15, 0, 10, 5, 10, 5, 5],
        [1, 10, 5, 3, 15, 4, 2],
      ];
      break;
  }

  return (
    <LineChart
      xAxis={[{ data: xAxisData, label: 'Недели' }]}
      series={[
        {
          data: seriesData[0],
          label: 'Выкуп',
          id: 'Sells',
          color: 'rgba(100, 149, 237, 1)',
        },
        {
          data: seriesData[1],
          id: 'Summary',
          label: 'Прибыль',
          area: true,
          color: 'rgba(127, 199, 255, 0.6)',
          showMark: false,
        },
      ]}
      slotProps={{
        loadingOverlay: { message: 'Данные загрузятся позже' },
        noDataOverlay: { message: 'Нет данных для отображения' },
      }}
      sx={{
        '& .MuiAreaElement-series-Summary': {
          fill: 'rgba(127, 199, 255, 0.2)',
        },
      }}
      height={250}
    />
  );
};
