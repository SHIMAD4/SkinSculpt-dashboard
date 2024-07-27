import type { Meta } from '@storybook/react';
import Tabs, { TabsProps } from '@/shared/ui/molecules/Tabs/index.tsx';

const meta: Meta<typeof Tabs> = {
  title: 'Molecules/Tabs',
  component: Tabs,
};

export default meta;

export const Default: { args: TabsProps; render: ({ titles }: TabsProps) => void } = {
  render: (props) => <Tabs {...props} />,
  args: {
    titles: [
      {
        id: 1,
        title: 'Сводка',
      },
      {
        id: 2,
        title: 'Wildberries',
      },
      {
        id: 3,
        title: 'OZON',
      },
      {
        id: 4,
        title: 'Я. Маркет',
      },
    ],
  },
};
