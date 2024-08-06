import axios from 'axios';

export const axiosInstanceOzon = axios.create({
  baseURL: '/ozon/api',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.AUTH_TOKEN_OZON}`,
  },
});

const getSalesByRealization = {
  get: () => axiosInstanceOzon.get('v1/finance/cash-flow-statement/list'),
};

export const OzonApi = {
  getSalesByRealization,
};
