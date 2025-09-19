import { Card } from '@/components/card';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Components/Card',
  render: Card,
  parameters: {
    layout: 'centered'
  },
  argTypes: {},
  tags: ['autodocs']
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  name: 'basic usage',
  args: {},
  render: () => {
    return (
      <Card>
        <div className="ar:flex ar:h-32 ar:w-48 ar:items-center ar:justify-center ar:rounded-2xl ar:border ar:border-dashed ar:border-neutral-400 ar:text-center ar:text-neutral-100">
          Slot
        </div>
      </Card>
    );
  }
};
