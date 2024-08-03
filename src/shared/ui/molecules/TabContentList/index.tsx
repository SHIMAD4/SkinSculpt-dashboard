import clsx from 'clsx';
import { FC } from 'react';
import { TabContent } from '@/shared/ui/atoms';
import TabContentStyles from '@/shared/ui/atoms/TabContent/style.module.scss';
import { ContentType } from '@/shared/lib/types/Tabs';
import { useAppSelector } from '@/shared/lib/hooks';

export type TabsProps = {
  tabContentsArray: ContentType[];
};

const TabContentList: FC<TabsProps> = ({ tabContentsArray }) => {
  const titles = useAppSelector((state) => state.tabs.tabsArray);
  const activeTab = useAppSelector((state) => state.tabs.activeTab);

  return (
    <ul>
      {titles.map(({ id, title }) => (
        <TabContent
          titleId={id}
          key={id}
          className={clsx(activeTab === title && TabContentStyles.activeContent)}
          tabContent={tabContentsArray}
        />
      ))}
    </ul>
  );
};

export default TabContentList;
