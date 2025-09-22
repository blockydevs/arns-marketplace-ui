import { useState } from 'react';
import { DatePicker } from '@/components/form/date-picker';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Components/Date picker',
  render: DatePicker,
  parameters: {
    layout: 'centered'
  },
  argTypes: {},
  tags: ['autodocs']
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  name: 'basic usage',
  args: undefined as never,
  render: () => {
    const [open, setOpen] = useState(false);
    const [date, setDate] = useState<Date | undefined>(undefined);
    const [time, setTime] = useState<string>('12:00:00');
    return <DatePicker date={date} open={open} setDate={setDate} setOpen={setOpen} time={time} setTime={setTime} />;
  }
};
