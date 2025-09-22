import { Card } from '@/components/card';
import { Row } from '@/components/row';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Examples/DetailsCard',
  parameters: {
    layout: 'centered'
  },
  argTypes: {},
  tags: ['autodocs']
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  name: 'Card with rows data',
  render: () => {
    return (
      <Card className="ar:mx-auto ar:flex ar:w-2xl ar:max-w-full ar:flex-col ar:gap-8">
        <Row variant="large" label="Domain name" value="blockydevs.org" />
        <Row label="Type of listing" value="Fixed price" />
        <Row label="Price" value="500.000000 ARIO" />
        <Row label="Expiration time" value="No time limit" desc="Listing remains active until sold or removed" />
      </Card>
    );
  }
};
