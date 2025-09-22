import { Select, SelectContent, SelectItem, SelectRoot, SelectTrigger, SelectValue } from '@/components/form/select';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Components/Select',
  render: () => (
    <SelectRoot>
      <SelectTrigger className="ar:w-[180px]">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">Light</SelectItem>
        <SelectItem value="dark">Dark</SelectItem>
        <SelectItem value="system">System</SelectItem>
      </SelectContent>
    </SelectRoot>
  ),
  args: {},
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  name: 'regular',
  render: () => (
    <Select
      placeholder="Type of listing"
      className="ar:w-[180px]"
      options={[
        { label: 'Dutch auction', value: 'dutch' },
        { label: 'English auction', value: 'english' },
        { label: 'Fix price', value: 'fixed' }
      ]}
    />
  )
};
