import type { Meta } from '@storybook/react';
import Tabs, { TabsProps } from '@/shared/ui/molecules/Tabs/index.tsx';
import { tabsTitles } from '@/shared/lib/data';

const meta: Meta<typeof Tabs> = {
  title: 'Molecules/Tabs',
  component: Tabs,
};

export default meta;

export const Default: { args: TabsProps; render: ({ titles }: TabsProps) => void } = {
  render: (props) => <Tabs {...props} />,
  args: {
    titles: tabsTitles,
  },
};
