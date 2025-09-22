import { Header } from '@/components/header';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Components/Header',
  render: Header,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5'],
      description: 'Header sizes variants'
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H1: Story = {
  name: 'H1',
  args: {
    size: 'h1',
    children: 'Heading 1'
  },
  render: Header
};
export const H2: Story = {
  name: 'H2',
  args: {
    size: 'h2',
    children: 'Heading 2'
  }
};
export const H3: Story = {
  name: 'H3',
  args: {
    size: 'h3',
    children: 'Heading 3'
  }
};
export const H4: Story = {
  name: 'H4',
  args: {
    size: 'h4',
    children: 'Heading 4'
  }
};
export const H5: Story = {
  name: 'H5',
  args: {
    size: 'h5',
    children: 'Heading 5'
  }
};
