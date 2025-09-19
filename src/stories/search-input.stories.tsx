import { SearchInput } from '@/components/form/search-input';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Components/SearchInput',
  render: SearchInput,
  parameters: {
    layout: 'centered'
  },
  argTypes: {},
  tags: ['autodocs']
} satisfies Meta<typeof SearchInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  name: 'basic',
  args: {},
  render: () => {
    return <SearchInput defaultValue="hello world!" />;
  }
};

export const Pending: Story = {
  name: 'pending',
  args: {},
  render: () => {
    return <SearchInput defaultValue="submit state" isPending />;
  }
};
