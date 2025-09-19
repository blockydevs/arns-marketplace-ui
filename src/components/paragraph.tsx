import { cn } from '@/utils/cn';
import { cva, type VariantProps } from 'class-variance-authority';

const paragraphVariants = cva('ar:font-base ar:text-white', {
  variants: {
    size: {
      regular: 'ar:text-base',
      small: 'ar:text-sm',
      mini: 'ar:text-xs',
      large: 'ar:text-[26px]'
    },
    fontWeight: {
      normal: 'ar:font-normal',
      medium: 'ar:font-medium'
    }
  },
  defaultVariants: {
    size: 'regular',
    fontWeight: 'normal'
  }
});

export interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {}

export function Paragraph({ className, size, fontWeight, ...props }: ParagraphProps) {
  return <p className={cn(paragraphVariants({ size, fontWeight }), className)} {...props} />;
}
