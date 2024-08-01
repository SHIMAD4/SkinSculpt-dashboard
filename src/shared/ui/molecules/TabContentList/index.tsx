import clsx from 'clsx';
import { FC } from 'react';
import { TabContent } from '@/shared/ui/atoms';
import TabContentStyles from '@/shared/ui/atoms/TabContent/style.module.scss';
import { ContentType } from '@/shared/lib/types/Tabs';

type TitleType = {
  id: number;
  title: string;
};

export type TabsProps = {
  titles: TitleType[];
  activeTab: string;
  tabContentsArray: ContentType[];
};

const TabContentList: FC<TabsProps> = ({ titles, activeTab, tabContentsArray }) => (
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
