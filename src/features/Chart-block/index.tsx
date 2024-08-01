import { FC } from 'react';
import styles from './styles.module.scss';
import { Text } from '@/shared/ui/atoms';
import { Chart, ChartProps } from '@/shared/ui/atoms/Chart';

type ChartBlockProps = {
  ApiDescription: {
    redemptions: string;
    ordersCount: string;
    deliveryIndex: string;
    income: string;
    redemptionsCount: string;
    oneDayRedemptions: string;
  };
} & ChartProps;

type ListElementProps = {
  title: string;
  number: string;
};

export const ChartBlock: FC<ChartBlockProps> = ({ ApiDescription, marketTitle }) => {
  const { redemptions, ordersCount, deliveryIndex, income, redemptionsCount, oneDayRedemptions } =
    ApiDescription;

  return (
    <div className={styles.block}>
      <Chart marketTitle={marketTitle} />
      <ul className={styles.list}>
        <ListElement title="Выкупов на сумму" number={redemptions} />
        <ListElement title="Количество заказов" number={ordersCount} />
        <ListElement title="Индекс доставки" number={deliveryIndex} />
        <ListElement title="Прибыль" number={income} />
        <ListElement title="Количество выкупов" number={redemptionsCount} />
        <ListElement title="Выкуп за день" number={oneDayRedemptions} />
      </ul>
    </div>
  );
};

const ListElement: FC<ListElementProps> = ({ title, number }) => (
  <li className={styles.element}>
    <Text as="p" design="common">
      {title}
    </Text>
    <Text as="p" design="basic-graphics">
      {number}
    </Text>
  </li>
);
