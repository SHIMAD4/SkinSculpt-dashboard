import TabStyles from '@/shared/ui/atoms/TabHead/styles.module.scss';
import styles from './styles.module.scss';
import clsx from 'clsx';
import { FC, MouseEvent, useEffect } from 'react';
import { TabHead } from '@/shared/ui/atoms';
import { handleTabClick } from '@/shared/lib/slices/Tabs/TitleSlice.tsx';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks';
import {
  getOzonData,
  getSummaryData,
  getWildberriesData,
  getYaMarketData,
} from '@/shared/lib/slices/Tabs/ContentSlice.tsx';
import { getChartData } from '@/shared/lib/slices/Tabs/ChartSlice.tsx';
import { TABS } from '@/shared/lib/contants/tabs.ts';

const TabHeadList: FC = () => {
  const dispatch = useAppDispatch();
  const { tabsArray, activeTab } = useAppSelector((state) => state.tabsTitle);

  const onListClick = ({ target, currentTarget }: MouseEvent<HTMLUListElement>) => {
    if (target instanceof HTMLElement && currentTarget) {
      const clickedTabText = target.innerText;

      if (clickedTabText === activeTab || clickedTabText === currentTarget.innerText) return;

      dispatch(handleTabClick({ clickedTabText }));
      dispatch(getChartData({ marketTitle: activeTab }));
    }
  };

  useEffect(() => {
    switch (activeTab) {
      case TABS.SUMMARY:
        // dispatch(getSummaryData());
        break;
      case TABS.WILDBERRIES:
        dispatch(getWildberriesData());
        break;
      case TABS.OZON:
        // dispatch(getOzonData());
        break;
      case TABS.YAMARKET:
        // dispatch(getYaMarketData());
        break;
    }

    dispatch(getChartData({ marketTitle: activeTab }));
  }, [dispatch, activeTab]);

  return (
    <ul className={styles.tabList} onClick={(e) => onListClick(e)}>
      {tabsArray.map(({ id, title }) => (
        <TabHead
          title={title}
          key={id}
          className={clsx(activeTab === title && TabStyles.activeTab)}
        />
      ))}
    </ul>
  );
};

export default TabHeadList;
