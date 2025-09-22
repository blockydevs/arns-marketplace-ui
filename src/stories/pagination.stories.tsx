import { useState } from 'react';
import { Pagination } from '@/components/pagination';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Components/Pagination',
  render: () => {
    const [index, setIndex] = useState(1);
    return <Pagination totalPages={5} activeIndex={index} onPageChange={setIndex} />;
  },
  parameters: {
    layout: 'centered'
  },
  argTypes: {},
  tags: ['autodocs']
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  name: '5 elements',
  args: {},
  render: () => {
    const [index, setIndex] = useState(1);
    return <Pagination totalPages={5} activeIndex={index} onPageChange={setIndex} />;
  }
};

export const Short: Story = {
  name: '1 element',
  args: {},
  render: () => {
    const [index, setIndex] = useState(1);
    return <Pagination totalPages={1} activeIndex={index} onPageChange={setIndex} />;
  }
};

export const TwoElements: Story = {
  name: '2 elements',
  args: {},
  render: () => {
    const [index, setIndex] = useState(1);
    return <Pagination totalPages={2} activeIndex={index} onPageChange={setIndex} />;
  }
};

export const ThreeElements: Story = {
  name: '3 elements',
  args: {},
  render: () => {
    const [index, setIndex] = useState(1);
    return <Pagination totalPages={3} activeIndex={index} onPageChange={setIndex} />;
  }
};

export const Long: Story = {
  name: '20 elements',
  render: () => {
    const [index, setIndex] = useState(1);
    return <Pagination totalPages={20} activeIndex={index} onPageChange={setIndex} />;
  }
};
