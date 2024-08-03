import styles from './style.module.scss';
import clsx from 'clsx';
import { FC, memo } from 'react';
import { Text } from '../Text';
import { ContentType } from '@/shared/lib/types/Tabs';

type TabContentProps = {
  titleId: number;
  tabContent: ContentType[];
  className?: string;
};

export const TabContent: FC<TabContentProps> = memo(({ titleId, tabContent, className }) =>
  tabContent.map(
    ({ id, content }) =>
      titleId === id && (
        <Text as="li" key={id} className={clsx([styles.content, className])}>
          {content}
        </Text>
      ),
  ),
);
