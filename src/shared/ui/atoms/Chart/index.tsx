import { FC } from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { useAppSelector } from '@/shared/lib/hooks';

export type ChartProps = Record<'marketTitle', string>;

const errorSlots = {
  loadingOverlay: { message: 'Данные загрузятся позже' },
  noDataOverlay: { message: 'Нет данных для отображения' },
};

const classNames = {
  '& .MuiAreaElement-series-Summary': {
    fill: 'rgba(127, 199, 255, 0.2)',
  },
};

export const Chart: FC = () => {
  const { seriesData, xAxisData } = useAppSelector((state) => state.tabsChart.chart);
  const sellsLine = seriesData[0];
  const summaryLine = seriesData[1];

  return (
    <LineChart
      xAxis={[{ data: xAxisData, label: 'Недели' }]}
      series={[sellsLine, summaryLine]}
      slotProps={errorSlots}
      sx={classNames}
      height={250}
    />
  );
};
