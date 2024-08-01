import styles from './styles.module.scss';
import clsx from 'clsx';
import { FC, memo } from 'react';
import { Text } from '../Text';

type TabProps = {
  title: string;
  className?: string;
};

export const TabHead: FC<TabProps> = memo(({ title, className }) => (
  <Text as="li" design="common" className={clsx([styles.tab, className])}>
    {title}
  </Text>
));
