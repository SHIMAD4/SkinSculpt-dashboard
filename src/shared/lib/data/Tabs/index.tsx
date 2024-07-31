import { ReactNode } from 'react';

export const tabsTitles = [
  {
    id: 1,
    title: 'Сводка',
  },
  {
    id: 2,
    title: 'Wildberries',
  },
  {
    id: 3,
    title: 'OZON',
  },
  {
    id: 4,
    title: 'Я. Маркет',
  },
];

export type ContentType = {
  id: number;
  content: ReactNode;
};

export const tabContents: ContentType[] = [
  {
    id: 1,
    content: <p>Сводка</p>,
  },
  {
    id: 2,
    content: <p>Wildberries</p>,
  },
  {
    id: 3,
    content: <p>OZON</p>,
  },
  {
    id: 4,
    content: <p>Я. Маркет</p>,
  },
];
