import TabStyles from '@/shared/ui/atoms/TabHead/styles.module.scss';
import styles from './styles.module.scss';
import clsx from 'clsx';
import { FC, MouseEvent } from 'react';
import { TabHead } from '@/shared/ui/atoms';
import { handleClick } from '@/shared/lib/slices/Tabs/TabTitleSlice.tsx';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks';

const TabHeadList: FC = () => {
  const titles = useAppSelector((state) => state.tabs.tabsArray);
  const activeTab = useAppSelector((state) => state.tabs.activeTab);

  const dispatch = useAppDispatch();

  const onListClick = ({ target, currentTarget }: MouseEvent<HTMLUListElement>) => {
    if (target instanceof HTMLElement && currentTarget) {
      if (target.innerText === activeTab) return;

      const targetText = target.innerText;
      const parentText = currentTarget.innerText;

      dispatch(handleClick({ targetText, parentText }));
    }
  };

  return (
    <ul className={styles.tabList} onClick={(e) => onListClick(e)}>
      {titles.map(({ id, title }) => (
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
