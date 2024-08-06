import axios from 'axios';

export const axiosInstanceYaMarket = axios.create({
  baseURL: '/yaMarket/api',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.AUTH_TOKEN_YAMARKET}`,
  },
});

const getSalesByRealization = {
  postRealizationReport: () =>
    axiosInstanceYaMarket.post('/reports/goods-realization/generate?format=', {
      campaignId: 80967003,
      year: 2024,
      month: 7,
    }),
  getRealizationReport: (reportId: string) =>
    axiosInstanceYaMarket.get(`/reports/info/${reportId}`),
};

export const YaMarketApi = {
  getSalesByRealization,
};
