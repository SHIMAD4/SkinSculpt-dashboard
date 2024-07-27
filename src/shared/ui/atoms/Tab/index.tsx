import styles from './styles.module.scss';
import clsx from 'clsx';
import { FC } from 'react';

type TabProps = {
  title: string;
  className?: string;
};

const Tab: FC<TabProps> = ({ title, className }) => (
  <li className={clsx([styles.tab, className])}>{title}</li>
);

export default Tab;
