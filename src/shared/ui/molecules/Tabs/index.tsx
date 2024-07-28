import Tab from '@/shared/ui/atoms/Tab';
import TabStyles from '@/shared/ui/atoms/Tab/styles.module.scss';
import styles from './styles.module.scss';
import clsx from 'clsx';
import { FC, useState, useCallback, useEffect } from 'react';

type TitleProps = {
  id: number;
  title: string;
};

export type TabsProps = {
  titles: TitleProps[];
};

const Tabs: FC<TabsProps> = ({ titles }) => {
  const defaultTab = titles[0].title;
  const savedTab = localStorage.getItem('activeTab') || defaultTab;
  const [activeTab, setActiveTab] = useState(savedTab);

  useEffect(() => localStorage.setItem('activeTab', activeTab), [activeTab]);

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
        <Tab title={title} key={id} className={clsx(activeTab === title && TabStyles.activeTab)} />
      ))}
    </ul>
  );
};

export default Tabs;
