import styles from './style.module.scss';
import clsx from 'clsx';
import { FC, memo } from 'react';
import { ContentType } from '@/shared/lib/data/Tabs';

type TabContentProps = {
  contentId: number;
  tabContent: ContentType[];
  className?: string;
};

const TabContent: FC<TabContentProps> = memo(({ contentId, tabContent, className }) =>
  tabContent.map(
    ({ id, content }) =>
      contentId === id && (
        <li key={id} className={clsx([styles.content, className])}>
          {content}
        </li>
      ),
  ),
);

export default TabContent;
