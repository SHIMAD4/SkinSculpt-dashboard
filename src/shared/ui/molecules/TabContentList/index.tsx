import clsx from 'clsx';
import { FC } from 'react';
import { TabContent } from '@/shared/ui/atoms';
import TabContentStyles from '@/shared/ui/atoms/TabContent/style.module.scss';
import { useAppSelector } from '@/shared/lib/hooks';

const TabContentList: FC = () => {
  const { tabsArray, activeTab } = useAppSelector((state) => state.tabsTitle);

  return (
    <ul>
      {tabsArray.map(({ id, title }) => (
        <TabContent
          key={id}
          className={clsx(activeTab === title && TabContentStyles.activeContent)}
        />
      ))}
    </ul>
  );
};

export default TabContentList;
