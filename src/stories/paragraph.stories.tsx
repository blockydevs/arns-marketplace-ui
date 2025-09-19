import { Paragraph } from '@/components/paragraph';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Components/Paragraph',
  render: Paragraph,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['regular', 'small', 'mini'],
      description: 'Paragraph sizes variants'
    },
    fontWeight: {
      control: { type: 'select' },
      options: ['normal', 'medium'],
      description: 'Paragraph font weight variants'
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof Paragraph>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  name: 'Regular',
  args: {
    children: 'Regular'
  },
  render: Paragraph
};
