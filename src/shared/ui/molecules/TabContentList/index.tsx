import clsx from 'clsx';
import { FC } from 'react';
import { TabContent } from '@/shared/ui/atoms';
import TabContentStyles from '@/shared/ui/atoms/TabContent/style.module.scss';
import { tabContentsArray } from '@/shared/lib/data/Tabs';

type TitleType = {
  id: number;
  title: string;
};

export type TabsProps = {
  titles: TitleType[];
  activeTab: string;
};

const TabContentList: FC<TabsProps> = ({ titles, activeTab }) => (
  <ul>
    {titles.map(({ id, title }) => (
      <TabContent
        contentId={id}
        key={id}
        className={clsx(activeTab === title && TabContentStyles.activeContent)}
        tabContent={tabContentsArray}
      />
    ))}
  </ul>
);

export default TabContentList;
