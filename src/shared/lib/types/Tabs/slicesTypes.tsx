import { ChartProps } from '@/shared/ui/atoms/Chart';

// Title
export type TitleType = {
  id: number;
  title: string;
};

export type TitlePayloadActionType = {
  targetText: string;
  parentText: string;
};

// Chart
export type seriesDataType = {
  id: string;
  label: string;
  data: number[];
  color: string;
  area?: boolean;
  showMark?: boolean;
};

export type ChartType = {
  xAxisData: number[];
  seriesData: seriesDataType[];
};

// Content
export type ContentPayloadActionType = ChartProps;

export type SummaryType = {
  redemptions: string;
  ordersCount: string;
  deliveryIndex: string;
  income: string;
  redemptionsCount: string;
  oneDayRedemptions: string;
};
