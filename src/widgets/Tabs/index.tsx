import { FC } from 'react';
import TabContentList from '@/shared/ui/molecules/TabContentList';
import TabHeadList from '@/shared/ui/molecules/TabHeadList';

const Tabs: FC = () => {
  return (
    <>
      <TabHeadList />
      <TabContentList />
    </>
  );
};

export default Tabs;
