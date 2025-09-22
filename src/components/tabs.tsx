import { cn } from '@/utils/cn';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { cva, type VariantProps } from 'class-variance-authority';

const Tabs = TabsPrimitive.Root;

interface TabsListProps extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> {
  ref?: React.RefObject<HTMLDivElement>;
}

const TabsList = ({ className, ref, ...props }: TabsListProps) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      'arns-marketplace-ui ar:!inline-flex ar:!w-fit ar:flex-wrap ar:gap-1 ar:rounded-sm ar:bg-neutral-900 ar:p-0.5 ar:font-base',
      className
    )}
    {...props}
  />
);

TabsList.displayName = TabsPrimitive.List.displayName;

const tabsTriggerVariants = cva(
  'ar:inline-flex ar:cursor-pointer ar:items-center ar:justify-center ar:rounded-sm ar:text-sm ar:font-medium ar:whitespace-nowrap ar:text-neutral-500 ar:focus-visible ar:transition-all ar:hover:bg-neutral-100 ar:hover:text-neutral-900 ar:focus-visible:ring-2 ar:focus-visible:ring-offset-2 ar:focus-visible:outline-none ar:disabled:pointer-events-none ar:disabled:opacity-50 ar:data-[state=active]:bg-neutral-800 ar:data-[state=active]:text-white ar:hover:data-[state=active]:bg-neutral-100 ar:hover:data-[state=active]:text-neutral-900',
  {
    variants: {
      size: {
        regular: 'ar:p-3.5',
        large: 'ar:p-4',
        small: 'ar:p-1.5 ar:text-xs'
      }
    },
    defaultVariants: {
      size: 'regular'
    }
  }
);

interface TabsTriggerProps
  extends VariantProps<typeof tabsTriggerVariants>,
    React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> {
  ref?: React.RefObject<HTMLButtonElement>;
}

const TabsTrigger = ({ className, size = 'regular', ref, ...props }: TabsTriggerProps) => (
  <TabsPrimitive.Trigger ref={ref} className={cn(tabsTriggerVariants({ size, className }))} {...props} />
);

TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

type TabsContentProps = React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content> & {
  ref?: React.RefObject<HTMLDivElement>;
};

const TabsContent = ({ className, ref, ...props }: TabsContentProps) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      'arns-marketplace-ui ar:mt-4 ar:font-base ar:focus-visible:ring-2 ar:focus-visible:ring-offset-2 ar:focus-visible:outline-none',
      className
    )}
    {...props}
  />
);

TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
