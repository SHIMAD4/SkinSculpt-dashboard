import styles from './styles.module.scss';
import clsx from 'clsx';
import { FC, memo } from 'react';

type TabProps = {
  title: string;
  className?: string;
};

const TabHead: FC<TabProps> = memo(({ title, className }) => (
  <li className={clsx([styles.tab, className])}>{title}</li>
));

export default TabHead;
