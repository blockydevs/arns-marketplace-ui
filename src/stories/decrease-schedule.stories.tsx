import { DecreaseScheduleTable, type Schedule } from '@/components/templates/domains/decrease-schedule';
import { formatDate } from '@/main';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Template/Decrease schedule table',
  component: DecreaseScheduleTable,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs']
} satisfies Meta<typeof DecreaseScheduleTable>;

const now = Date.now();
const oneDayMs = 24 * 60 * 60 * 1000;

const exampleData: Schedule[] = [now, now + oneDayMs, now + 2 * oneDayMs, now + 3 * oneDayMs, now + 4 * oneDayMs].map(
  (timestamp, index) => ({
    date: formatDate(new Date(timestamp).toISOString()),
    price: 500 - index * 100
  })
);

export default meta;
type Story = StoryObj<typeof meta>;

export const Table: Story = {
  name: 'Decrease schedule',
  args: { data: exampleData },
  render: (args) => (
    <div style={{ width: '100%', maxWidth: 'calc(100% - 32px)', overflow: 'hidden', padding: '16px' }}>
      <DecreaseScheduleTable {...args} />
    </div>
  )
};
