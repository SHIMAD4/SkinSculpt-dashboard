import Tab from '@/shared/ui/atoms/Tab';
import TabStyles from '@/shared/ui/atoms/Tab/styles.module.scss';
import styles from './styles.module.scss';
import clsx from 'clsx';
import { FC, useState, useCallback, useEffect } from 'react';

export type TabsProps = {
  titles: { id: number; title: string }[];
};

const Tabs: FC<TabsProps> = ({ titles }) => {
  const [activeTab, setActiveTab] = useState(titles[0].title);

  useEffect(() => {}, []);

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
