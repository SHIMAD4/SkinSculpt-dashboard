import { FC, memo } from 'react';
import WrapperStyles from '@/widgets/Wrapper/styles.module.scss';
import { ChartBlock } from '@/features';
import Wrapper from '@/widgets/Wrapper';
import clsx from 'clsx';
import styles from './style.module.scss';

type TabContentProps = {
  className?: string;
};

export const TabContent: FC<TabContentProps> = memo(({ className }) => {
  return (
    <li className={clsx([styles.content, className])}>
      <Wrapper className={WrapperStyles.grid}>
        <ChartBlock />
      </Wrapper>
    </li>
  );
});
