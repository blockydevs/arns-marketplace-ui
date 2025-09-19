import { DetailsCard } from '@/components/templates/domains/details';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Template/Details card',
  component: DetailsCard,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof DetailsCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dutch: Story = {
  name: 'Dutch auction',
  args: {
    owner: true,
    price: '200.30 ARIO',
    startDate: '2025-08-01T10:00:00Z',
    endDate: '2025-12-01T10:00:00Z',
    variant: 'dutch'
  },
  render: (args) => (
    <DetailsCard {...args} className="ar:min-w-80">
      <p className="ar:text-white">{`{childrens}`}</p>
    </DetailsCard>
  )
};

export const DutchSold: Story = {
  name: 'Dutch sold auction',
  args: {
    owner: true,
    price: '200.30 ARIO',
    status: 'sold',
    startDate: '2025-08-01T10:00:00Z',
    endDate: '2025-12-01T10:00:00Z',
    variant: 'dutch'
  },
  render: (args) => (
    <DetailsCard {...args} className="ar:min-w-80">
      <p className="ar:text-white">{`{childrens}`}</p>
    </DetailsCard>
  )
};

export const English: Story = {
  name: 'English auction',
  args: {
    price: '200.30 ARIO',
    startDate: '2025-08-01T10:00:00Z',
    endDate: '2025-12-01T10:00:00Z',
    variant: 'english'
  },
  render: (args) => (
    <DetailsCard {...args} className="ar:min-w-80">
      <p className="ar:text-white">{`{childrens}`}</p>
    </DetailsCard>
  )
};

export const EnglishSold: Story = {
  name: 'English sold auction',
  args: {
    price: '200.30 ARIO',
    status: 'sold',
    variant: 'english',
    startDate: '2025-08-01T10:00:00Z',
    endDate: '2025-12-01T10:00:00Z'
  },
  render: (args) => (
    <DetailsCard {...args} className="ar:min-w-80">
      <p className="ar:text-white">{`{childrens}`}</p>
    </DetailsCard>
  )
};

export const Fixed: Story = {
  name: 'Fixed price auction',
  args: {
    price: '200.30 ARIO',
    startDate: '2025-08-01T10:00:00Z',
    endDate: '2025-12-01T10:00:00Z',
    variant: 'fixed'
  },
  render: (args) => (
    <DetailsCard {...args} className="ar:min-w-80">
      <p className="ar:text-white">{`{childrens}`}</p>
    </DetailsCard>
  )
};

export const FixedInfinite: Story = {
  name: 'Fixed price auction',
  args: {
    price: '200.30 ARIO',
    startDate: '2025-08-01T10:00:00Z',
    variant: 'fixed'
  },
  render: (args) => (
    <DetailsCard {...args} className="ar:min-w-80">
      <p className="ar:text-white">{`{childrens}`}</p>
    </DetailsCard>
  )
};

export const FixedSold: Story = {
  name: 'Fixed price sold auction',
  args: {
    price: '200.30 ARIO',
    status: 'sold',
    startDate: '2025-08-01T10:00:00Z',
    endDate: '2025-12-01T10:00:00Z',
    variant: 'fixed'
  },
  render: (args) => (
    <DetailsCard {...args} className="ar:min-w-80">
      <p className="ar:text-white">{`{childrens}`}</p>
    </DetailsCard>
  )
};

export const FixedExpired: Story = {
  name: 'Fixed price expired',
  args: {
    price: '200.30 ARIO',
    status: 'expired',
    startDate: '2025-08-01T10:00:00Z',
    endDate: '2025-12-01T10:00:00Z',
    variant: 'fixed'
  },
  render: (args) => (
    <DetailsCard {...args} className="ar:min-w-80">
      <p className="ar:text-white">{`{childrens}`}</p>
    </DetailsCard>
  )
};
