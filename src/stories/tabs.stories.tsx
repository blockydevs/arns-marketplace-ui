import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/tabs';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Components/Tabs',
  render: () => (
    <Tabs defaultValue="1">
      <TabsList>
        <TabsTrigger value="1">Active Listings</TabsTrigger>
        <TabsTrigger value="2">Completed Listings</TabsTrigger>
      </TabsList>
      <TabsContent value="1">1</TabsContent>
      <TabsContent value="2">2</TabsContent>
    </Tabs>
  ),
  args: {},
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  name: 'regular',
  render: () => (
    <Tabs defaultValue="1">
      <TabsList>
        <TabsTrigger value="1">Active Listings</TabsTrigger>
        <TabsTrigger value="2">Completed Listings</TabsTrigger>
      </TabsList>
      <TabsContent value="1">1</TabsContent>
      <TabsContent value="2">2</TabsContent>
    </Tabs>
  )
};

export const Large: Story = {
  name: 'large',
  render: () => (
    <Tabs defaultValue="1">
      <TabsList>
        <TabsTrigger size="large" value="1">
          Active Listings
        </TabsTrigger>
        <TabsTrigger size="large" value="2">
          Completed Listings
        </TabsTrigger>
      </TabsList>
      <TabsContent value="1">1</TabsContent>
      <TabsContent value="2">2</TabsContent>
    </Tabs>
  )
};

export const Small: Story = {
  name: 'small',
  render: () => (
    <Tabs defaultValue="1">
      <TabsList>
        <TabsTrigger size="small" value="1">
          Active Listings
        </TabsTrigger>
        <TabsTrigger size="small" value="2">
          Completed Listings
        </TabsTrigger>
      </TabsList>
      <TabsContent value="1">1</TabsContent>
      <TabsContent value="2">2</TabsContent>
    </Tabs>
  )
};
