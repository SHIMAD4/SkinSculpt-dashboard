import TabStyles from '@/shared/ui/atoms/TabHead/styles.module.scss';
import styles from './styles.module.scss';
import clsx from 'clsx';
import { FC, useCallback } from 'react';
import { TabHead } from '@/shared/ui/atoms';

export type TitleType = {
  id: number;
  title: string;
};

export type TabHeadListProps = {
  titles: TitleType[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

const TabHeadList: FC<TabHeadListProps> = ({ titles, activeTab, setActiveTab }) => {
  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLUListElement>) => {
      const { target, currentTarget } = event;
      if (target === currentTarget) return;

      const targetElement = target as HTMLElement;
      setActiveTab(targetElement.innerText);
    },
    [setActiveTab],
  );

  return (
    <ul className={styles.tabList} onClick={handleClick}>
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
