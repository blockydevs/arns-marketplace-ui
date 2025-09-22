import { Row } from '@/components/row';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Components/Row',
  render: Row,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['regular', 'large'],
      description: 'Variants'
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof Row>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  name: 'regular',
  args: {
    label: 'Domain name',
    value: 'Domain name'
  }
};

export const Large: Story = {
  name: 'large',
  args: {
    label: 'Domain name',
    value: 'Domain name',
    variant: 'large'
  }
};
