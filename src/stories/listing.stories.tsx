import { ActiveListingTable } from '@/components/templates/domains/active-listing';
import type { Domain } from '@/components/templates/domains/types';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { addDays, addHours } from 'date-fns';

const meta = {
  title: 'Template/Active listing table',
  component: ActiveListingTable,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs']
} satisfies Meta<typeof ActiveListingTable>;

const now = new Date();
const oneHour = addHours(now, 1);
const twoHour = addHours(now, 2);
const twentyDays = addDays(now, 20);

const exampleData: Domain[] = [
  {
    name: 'BlockyDevs',
    action: () => {
      console.log('test');
    },
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
    endDate: twoHour.toISOString(),
    price: { type: 'buyout', symbol: 'ARIO', value: 300 },
    type: { value: 'fixed' },
    ownershipType: 'permabuy'
  },
  {
    name: 'lease-me.ario',
    action: () => {
      console.log('test');
    },
    endDate: twentyDays.toISOString(),
    price: { type: 'buyout', symbol: 'ARIO', value: 50 },
    type: { value: 'fixed' },
    ownershipType: 'lease'
  },
  {
    name: 'DomainName',
    action: () => {
      console.log('test');
    },
    endDate: twentyDays.toISOString(),
    price: { type: 'buyout', symbol: 'ARIO', value: 140 },
    type: { value: 'dutch' },
    ownershipType: 'permabuy'
  },
  {
    name: 'DomainName',
    action: () => {
      console.log('test');
    },
    endDate: twentyDays.toISOString(),
    price: { type: 'buyout', symbol: 'ARIO', value: 300 },
    type: { value: 'dutch', label: 'Special dutch auction', highlightColor: 'gold' },
    ownershipType: 'permabuy'
  },
  {
    name: 'VeryLongDomainNameButItsVeryVeryVeryVeryVeeeeeeeeryLong',
    action: () => {
      console.log('test');
    },
    price: { type: 'buyout', symbol: 'ARIO', value: 140 },
    type: { value: 'fixed', label: 'Fixed price 1.0', highlightColor: 'turquoise' },
    ownershipType: 'permabuy'
  }
];

export default meta;
type Story = StoryObj<typeof meta>;

export const Table: Story = {
  name: 'Active listing',
  args: { data: exampleData },
  render: (args) => (
    <div style={{ width: '100%', maxWidth: 'calc(100% - 32px)', overflow: 'hidden', padding: '16px' }}>
      <ActiveListingTable {...args} />
    </div>
  )
};

export const Loading: Story = {
  name: 'Table is loading',
  args: { data: exampleData, isPending: true },
  render: (args) => (
    <div style={{ width: '100%', maxWidth: 'calc(100% - 32px)', overflow: 'hidden', padding: '16px' }}>
      <ActiveListingTable {...args} />
    </div>
  )
};

export const Error: Story = {
  name: 'Error during loading',
  args: { data: exampleData, error: 'Lorem upsum erroium' },
  render: (args) => (
    <div style={{ width: '100%', maxWidth: 'calc(100% - 32px)', overflow: 'hidden', padding: '16px' }}>
      <ActiveListingTable {...args} />
    </div>
  )
};
