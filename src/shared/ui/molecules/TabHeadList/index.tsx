import TabStyles from '@/shared/ui/atoms/TabHead/styles.module.scss';
import styles from './styles.module.scss';
import clsx from 'clsx';
import { FC, MouseEvent, useEffect } from 'react';
import { TabHead } from '@/shared/ui/atoms';
import { handleTabClick } from '@/shared/lib/slices/Tabs/TitleSlice.tsx';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks';
import { getContentData } from '@/shared/lib/slices/Tabs/ContentSlice.tsx';
import { getChartData } from '@/shared/lib/slices/Tabs/ChartSlice.tsx';

const TabHeadList: FC = () => {
  const dispatch = useAppDispatch();
  const { tabsArray, activeTab } = useAppSelector((state) => state.tabsTitle);

  const onListClick = ({ target, currentTarget }: MouseEvent<HTMLUListElement>) => {
    if (target instanceof HTMLElement && currentTarget) {
      if (target.innerText === activeTab) return;

      const targetText = target.innerText;
      const parentText = currentTarget.innerText;

      dispatch(handleTabClick({ targetText, parentText }));
      dispatch(getContentData({ marketTitle: activeTab }));
      dispatch(getChartData({ marketTitle: activeTab }));
    }
  };

  useEffect(() => {
    dispatch(getContentData({ marketTitle: activeTab }));
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
