import { CheckboxWithLabel } from '@/components/form/checkbox';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Components/CheckboxWithLabel',
  render: CheckboxWithLabel,
  parameters: {
    layout: 'centered'
  },
  argTypes: {},
  tags: ['autodocs']
} satisfies Meta<typeof CheckboxWithLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  name: 'basic',
  args: { label: 'lorem ipsum laborum checkbox' }
};

export const Disabled: Story = {
  name: 'disabled',
  args: { label: 'Test data', disabled: true }
};

export const Error: Story = {
  name: 'aria-invalid',
  args: { label: 'Test data', 'aria-invalid': true }
};
