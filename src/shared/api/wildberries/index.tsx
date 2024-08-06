import axios from 'axios';
import { formatDateToISO } from '@/shared/lib/helpers';

export const axiosInstanceWildberries = axios.create({
  baseURL: '/wb/api',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.AUTH_TOKEN_WILDBERRIES}`,
  },
});

const getSalesByRealization = {
  getRealizationReport: (
    dateFrom: { year: number; month: number; day: number },
    dateTo: { year: number; month: number; day: number },
    limit: number,
  ) => {
    const dateFromISO = formatDateToISO(dateFrom.year, dateFrom.month, dateFrom.day);
    const dateToISO = formatDateToISO(dateTo.year, dateTo.month, dateTo.day);

    return axiosInstanceWildberries.get(
      `v5/supplier/reportDetailByPeriod?dateFrom=${encodeURIComponent(dateFromISO)}&dateTo=${encodeURIComponent(dateToISO)}&limit=${limit}`,
    );
  },
};

export const WildberriesApi = {
  getSalesByRealization,
};
