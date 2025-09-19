import { Button } from '@/components/button';
import { getDutchListingSchedule } from '@/main';
import type { Meta, StoryObj } from '@storybook/react-vite';

const ExampleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5.28763 2.28769C6.2722 1.30312 7.60755 0.75 8.99994 0.75C10.3923 0.75 11.7277 1.30312 12.7123 2.28769C13.6968 3.27226 14.2499 4.60761 14.2499 6C14.2499 7.60864 14.5019 8.60927 14.8315 9.30699C15.1619 10.0064 15.594 10.4583 16.0933 10.973C16.0988 10.9788 16.1043 10.9846 16.1097 10.9905C16.3053 11.2055 16.4343 11.4727 16.4808 11.7597C16.5274 12.0466 16.4896 12.3409 16.372 12.6068C16.2544 12.8726 16.0621 13.0986 15.8185 13.2572C15.5749 13.4157 15.2905 13.5001 14.9999 13.5C14.9999 13.5 15 13.5 14.9999 13.5H2.99994C2.70921 13.4998 2.42426 13.4151 2.18078 13.2562C1.9373 13.0973 1.74523 12.8711 1.62795 12.6051C1.51067 12.3391 1.47323 12.0447 1.52018 11.7578C1.56712 11.4709 1.69644 11.2038 1.89239 10.989C1.89742 10.9835 1.90253 10.9781 1.90772 10.9727C2.40612 10.4581 2.83784 10.0064 3.16827 9.30693C3.49786 8.60922 3.74994 7.60856 3.74994 6C3.74994 4.60761 4.30306 3.27226 5.28763 2.28769ZM8.99994 2.25C8.00538 2.25 7.05155 2.64509 6.34829 3.34835C5.64503 4.05161 5.24994 5.00544 5.24994 6C5.24994 7.76569 4.9729 8.99853 4.52455 9.94763C4.08236 10.8837 3.49614 11.4888 3.00292 11.998L3.00096 12H14.9997C14.505 11.4901 13.9179 10.8846 13.4753 9.94776C13.0268 8.99848 12.7499 7.76561 12.7499 6C12.7499 5.00544 12.3549 4.05161 11.6516 3.34835C10.9483 2.64509 9.9945 2.25 8.99994 2.25ZM7.32586 15.1005C7.68457 14.8934 8.14327 15.0163 8.3504 15.375C8.41623 15.489 8.5109 15.5836 8.62491 15.6495C8.73892 15.7153 8.86825 15.7499 8.9999 15.7499C9.13154 15.7499 9.26087 15.7153 9.37488 15.6495C9.48889 15.5836 9.58357 15.489 9.6494 15.375C9.85652 15.0163 10.3152 14.8934 10.6739 15.1005C11.0326 15.3076 11.1555 15.7663 10.9484 16.125C10.7509 16.4671 10.4669 16.7511 10.1248 16.9485C9.78282 17.146 9.39484 17.2499 8.9999 17.2499C8.60496 17.2499 8.21698 17.146 7.87495 16.9485C7.53292 16.7511 7.24888 16.4671 7.0514 16.125C6.84427 15.7663 6.96716 15.3076 7.32586 15.1005Z"
      fill="currentColor"
    />
  </svg>
);

const meta = {
  title: 'Components/Button',
  render: (args) => <Button {...args}>{args.children}</Button>,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'destructive', 'outline', 'ghost', 'link'],
      description: 'Button variant style'
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disabled value'
    },
    size: {
      control: { type: 'select' },
      options: ['regular', 'large', 'small', 'mini'],
      description: 'Button size variants'
    },
    loading: {
      control: { type: 'boolean' }
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary',
    onClick: () => {
      console.log(
        getDutchListingSchedule({
          startingPrice: String(100 * 10 ** 6), // 100 ANT
          decreaseInterval: String(30 * 60 * 1000), // every 30 minutes
          decreaseStep: String(5 * 10 ** 6), // decrease by 5 ANT
          minimumPrice: String(50 * 10 ** 6), // minimum price of 50 ANT
          createdAt: Date.now() - 3 * 60 * 60 * 1000, // 3 hours ago
          endedAt: Date.now() + 3 * 60 * 60 * 1000 // in 3 hours
        })
      );
    }
  }
};

export const PrimaryWithIcon: Story = {
  args: {
    variant: 'primary',
    children: 'Primary'
  },
  render: (args) => <Button {...args} icon={<ExampleIcon width={16} height={16} />} />
};

export const PrimaryWithIconAndLoading: Story = {
  args: {
    variant: 'primary',
    children: 'Primary',
    loading: true
  },
  render: (args) => <Button {...args} icon={<ExampleIcon width={16} height={16} />} />
};

export const PrimaryWithRightSideIcon: Story = {
  args: {
    variant: 'primary',
    children: 'Primary',
    iconPlacement: 'right'
  },
  render: (args) => <Button {...args} icon={<ExampleIcon width={16} height={16} />} />
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary'
  }
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline'
  }
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Destructive'
  }
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost'
  }
};

export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Link'
  }
};

export const PrimaryLoading: Story = {
  args: {
    variant: 'primary',
    loading: true,
    children: 'Primary'
  }
};

export const SecondaryLoading: Story = {
  args: {
    variant: 'secondary',
    loading: true,
    children: 'Secondary'
  }
};

export const OutlineLoading: Story = {
  args: {
    variant: 'outline',
    loading: true,
    children: 'Outline'
  }
};

export const GhostLoading: Story = {
  args: {
    variant: 'ghost',
    loading: true,
    children: 'Ghost'
  }
};

export const DestructiveLoading: Story = {
  args: {
    variant: 'destructive',
    loading: true,
    children: 'Destructive'
  }
};
