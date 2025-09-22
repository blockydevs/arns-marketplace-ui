import { CompletedListingTable } from '@/components/templates/domains/completed-listing';
import type { Domain } from '@/components/templates/domains/types';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { addDays, addHours, subDays, subHours } from 'date-fns';

const meta = {
  title: 'Template/Completed listing table',
  component: CompletedListingTable,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs']
} satisfies Meta<typeof CompletedListingTable>;

const now = new Date();
const oneHour = addHours(now, 1);
const twoHour = addHours(now, 2);
const twentyDays = addDays(now, 20);

const oneHourAgo = subHours(now, 1);
const twoDaysAgo = subDays(now, 2);
const twentyDaysAgo = subDays(now, 20);

const exampleData: Domain[] = [
  {
    name: 'BlockyDevs',
    action: () => {
      console.log('test');
    },
    createdAt: oneHourAgo.toISOString(),
    endDate: oneHour.toISOString(),
    price: { type: 'bid', symbol: 'ARIO', value: 1200 },
    type: { value: 'english' },
    ownershipType: 'permabuy'
  },
  {
    name: 'DomainName',
    action: () => {
      console.log('test');
    },
    createdAt: twoDaysAgo.toISOString(),
    endDate: twoHour.toISOString(),
    price: { type: 'buyout', symbol: 'ARIO', value: 300 },
    type: { value: 'fixed' },
    ownershipType: 'permabuy'
  },
  {
    name: 'DomainName',
    action: () => {
      console.log('test');
    },
    createdAt: twentyDaysAgo.toISOString(),
    endDate: twentyDays.toISOString(),
    price: { type: 'buyout', symbol: 'ARIO', value: 140 },
    type: { value: 'dutch' },
    ownershipType: 'permabuy'
  }
];

export default meta;
type Story = StoryObj<typeof meta>;

export const Table: Story = {
  name: 'Completed listing',
  args: { data: exampleData },
  render: (args) => (
    <div style={{ width: '100%', maxWidth: 'calc(100% - 32px)', overflow: 'hidden', padding: '16px' }}>
      <CompletedListingTable {...args} />
    </div>
  )
};
