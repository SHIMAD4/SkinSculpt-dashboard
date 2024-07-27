import styles from './styles.module.scss';
import clsx from 'clsx';
import { FC, PropsWithChildren } from 'react';

type WrapperProps = {
  className?: string;
} & PropsWithChildren;

const Wrapper: FC<WrapperProps> = ({ children, className }) => (
  <div className={clsx([styles.wrapper, className])}>{children}</div>
);

export default Wrapper;
