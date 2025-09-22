import { GoBackHeader } from '@/components/templates/go-back-header';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Template/Go back header',
  component: GoBackHeader,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs']
} satisfies Meta<typeof GoBackHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Table: Story = {
  name: 'basic usage',
  args: {
    title: 'Testing label',
    onGoBack: () => {
      console.log('test');
    }
  }
};
