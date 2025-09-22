import { Input } from '@/components/form/input';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Components/Input',
  render: Input,
  parameters: {
    layout: 'centered'
  },
  argTypes: {},
  tags: ['autodocs']
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  name: 'basic',
  args: {},
  render: () => {
    return <Input label="Test data" placeholder="lorem ipsum" />;
  }
};

export const Disabled: Story = {
  name: 'disabled',
  args: {},
  render: () => {
    return <Input label="Test data" placeholder="lorem ipsum" disabled />;
  }
};

export const Error: Story = {
  name: 'aria-invalid',
  args: {},
  render: () => {
    return <Input label="Test data" placeholder="lorem ipsum" value="test" aria-invalid />;
  }
};

export const Suffix: Story = {
  name: 'suffix',
  args: {},
  render: () => {
    return <Input label="Test data" suffix="ARIO" placeholder="lorem ipsum" />;
  }
};
