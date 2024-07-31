import { FC, useEffect, useState } from 'react';
import TabContentList from '@/shared/ui/molecules/TabContentList';
import TabHeadList, { TitleType } from '@/shared/ui/molecules/TabHeadList';

type TabsProps = {
  titles: TitleType[];
};

const Tabs: FC<TabsProps> = ({ titles }) => {
  const defaultTab = titles[0].title;
  const savedTab = localStorage.getItem('activeTab') || defaultTab;
  const [activeTab, setActiveTab] = useState(savedTab);

  useEffect(() => localStorage.setItem('activeTab', activeTab), [activeTab]);

  return (
    <>
      <TabHeadList titles={titles} activeTab={activeTab} setActiveTab={setActiveTab} />
      <TabContentList titles={titles} activeTab={activeTab} />
    </>
  );
};

export default Tabs;
