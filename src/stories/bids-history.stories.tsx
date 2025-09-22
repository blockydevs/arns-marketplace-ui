import { BidsTable } from '@/components/templates/domains/bids';
import type { Bid } from '@/components/templates/domains/types';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Template/Bids history table',
  component: BidsTable,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs']
} satisfies Meta<typeof BidsTable>;

const exampleData: Bid[] = [
  { bidder: '0x12349123840', href: 'https://google.pl', date: '14-07-2025 14:00', price: '500 ARIO' },
  { bidder: '0x12349123840', href: 'https://google.pl', date: '14-07-2025 14:00', price: '400 ARIO' },
  { bidder: '0x12349123840', href: 'https://google.pl', date: '14-07-2025 14:00', price: '200 ARIO' },
  { bidder: '0x12349123840', href: 'https://google.pl', date: '14-07-2025 14:00', price: '10 ARIO' },
  { bidder: '0x12349123840', href: 'https://google.pl', date: '14-07-2025 14:00', price: '2 ARIO' }
];

export default meta;
type Story = StoryObj<typeof meta>;

export const Table: Story = {
  name: 'Bids history',
  args: { data: exampleData },
  render: (args) => (
    <div style={{ width: '100%', maxWidth: 'calc(100% - 32px)', overflow: 'hidden', padding: '16px' }}>
      <BidsTable {...args} />
    </div>
  )
};
