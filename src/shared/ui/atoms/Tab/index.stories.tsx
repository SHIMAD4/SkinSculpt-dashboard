import type { Meta, StoryObj } from '@storybook/react';
import Tab from '.';

const meta: Meta<typeof Tab> = {
  title: 'Atoms/Tab',
  component: Tab,
  argTypes: {
    title: { type: 'string' },
    className: { type: 'string' },
  },
};

export default meta;

type Story = StoryObj<typeof Tab>;

export const Default: Story = {
  render: (props) => <Tab {...props} />,
  args: { title: 'Сводка', className: '' },
};
