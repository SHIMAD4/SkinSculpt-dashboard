import { FC, useEffect, useState } from 'react';
import TabContentList from '@/shared/ui/molecules/TabContentList';
import TabHeadList, { TitleType } from '@/shared/ui/molecules/TabHeadList';
import Wrapper from '@/widgets/Wrapper';
import WrapperStyles from '@/widgets/Wrapper/styles.module.scss';
import { ChartBlock } from '@/features';
import { ContentType } from '@/shared/lib/types/Tabs';

type TabsProps = {
  titles: TitleType[];
};

// TODO: Убрать пример
const tabContentsArray: ContentType[] = [
  {
    id: 1,
    content: (
      <Wrapper className={WrapperStyles.grid}>
        <ChartBlock
          ApiDescription={{
            redemptions: '1 000 000₽',
            ordersCount: '1 000',
            deliveryIndex: '100%',
            income: '1 000 000₽',
            redemptionsCount: '400',
            oneDayRedemptions: '100 000₽',
          }}
          marketTitle="Summary"
        />
      </Wrapper>
    ),
  },
  {
    id: 2,
    content: (
      <Wrapper className={WrapperStyles.grid}>
        <ChartBlock
          ApiDescription={{
            redemptions: '100 000₽',
            ordersCount: '100',
            deliveryIndex: '40%',
            income: '50 000₽',
            redemptionsCount: '100',
            oneDayRedemptions: '10 000₽',
          }}
          marketTitle="Wildberries"
        />
      </Wrapper>
    ),
  },
  {
    id: 3,
    content: (
      <Wrapper className={WrapperStyles.grid}>
        <ChartBlock
          ApiDescription={{
            redemptions: '99 999₽',
            ordersCount: '99',
            deliveryIndex: '60%',
            income: '99 999₽',
            redemptionsCount: '99',
            oneDayRedemptions: '9 999₽',
          }}
          marketTitle="Ozon"
        />
      </Wrapper>
    ),
  },
  {
    id: 4,
    content: (
      <Wrapper className={WrapperStyles.grid}>
        <ChartBlock
          ApiDescription={{
            redemptions: '10 000₽',
            ordersCount: '10',
            deliveryIndex: '55.5%',
            income: '1 000₽',
            redemptionsCount: '50',
            oneDayRedemptions: '5 000₽',
          }}
          marketTitle="Ya.Market"
        />
      </Wrapper>
    ),
  },
];

const Tabs: FC<TabsProps> = ({ titles }) => {
  const defaultTab = titles[0].title;
  const savedTab = localStorage.getItem('activeTab') || defaultTab;
  const [activeTab, setActiveTab] = useState(savedTab);

  useEffect(() => localStorage.setItem('activeTab', activeTab), [activeTab]);

  return (
    <>
      <TabHeadList titles={titles} activeTab={activeTab} setActiveTab={setActiveTab} />
      <TabContentList titles={titles} activeTab={activeTab} tabContentsArray={tabContentsArray} />
    </>
  );
};

export default Tabs;
