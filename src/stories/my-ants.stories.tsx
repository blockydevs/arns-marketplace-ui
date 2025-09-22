import { MyANTsTable } from '@/components/templates/domains/my-ants';
import type { OwnedDomain } from '@/components/templates/domains/types';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { addDays } from 'date-fns';

const meta = {
  title: 'Template/My ANTs table',
  component: MyANTsTable,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs']
} satisfies Meta<typeof MyANTsTable>;

const now = new Date();
const twentyDays = addDays(now, 20);

const exampleData: OwnedDomain[] = [
  {
    name: 'BlockyDevs',
    action: () => {
      console.log('test');
    },
    status: 'idle',
    ownershipType: 'permabuy'
  },
  {
    name: 'DomainName',
    action: () => {
      console.log('test');
    },
    price: { type: 'buyout', symbol: 'ARIO', value: 300 },
    type: { value: 'fixed' },
    status: 'listed',
    ownershipType: 'permabuy'
  },
  {
    name: 'DomainName',
    action: () => {
      console.log('test');
    },
    endDate: twentyDays.toISOString(),
    price: { type: 'buyout', symbol: 'ARIO', value: 140 },
    type: { value: 'dutch' },
    status: 'sold',
    ownershipType: 'permabuy'
  }
];

export default meta;
type Story = StoryObj<typeof meta>;

export const Table: Story = {
  name: 'My ANTs',
  args: { data: exampleData },
  render: (args) => (
    <div style={{ width: '100%', maxWidth: 'calc(100% - 32px)', overflow: 'hidden', padding: '16px' }}>
      <MyANTsTable {...args} />
    </div>
  )
};
