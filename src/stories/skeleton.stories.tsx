import { Skeleton } from '@/components/skeleton';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Components/Skeleton',
  render: Skeleton,
  parameters: {
    layout: 'centered'
  },
  argTypes: {},
  tags: ['autodocs']
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  name: 'basic',
  args: { className: 'ar:aspect-video ar:min-w-lg' }
};

export const Disabled: Story = {
  name: 'card example',
  args: {},
  render: () => (
    <Skeleton className="arns-marketplace-ui ar:border ar:border-neutral-800 ar:p-4">
      <div className="ar:flex ar:min-w-md ar:flex-col ar:justify-center">
        <Skeleton as="h4" className="ar:mb-1 ar:bg-neutral-700" lines={1} />
        <Skeleton as="span" lines={1} className="ar:mb-0.5 ar:bg-neutral-700 ar:text-sm" size="1/2" />
        <Skeleton as="span" lines={1} className="ar:bg-neutral-700 ar:text-sm" size="1/2" />
      </div>
    </Skeleton>
  )
};

export const Error: Story = {
  name: 'rounded',
  args: { className: 'ar:rounded-full ar:w-12 ar:h-12' }
};
