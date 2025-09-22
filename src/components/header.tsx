import { cn } from '@/utils/cn';

export interface HeaderProps extends React.PropsWithChildren {
  size: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
  className?: string;
}

export const Header = ({ size, children, className }: HeaderProps) => {
  const base = 'ar:font-base ar:font-medium ar:text-white ar:-tracking-tighter ar:break-words';

  switch (size) {
    case 'h1':
      return <h1 className={cn(base, 'ar:text-5xl', className)}>{children}</h1>;
    case 'h2':
      return <h2 className={cn(base, 'ar:text-3xl', className)}>{children}</h2>;
    case 'h3':
      return <h3 className={cn(base, 'ar:text-2xl', className)}>{children}</h3>;
    case 'h4':
      return <h4 className={cn(base, 'ar:text-xl', className)}>{children}</h4>;
    case 'h5':
      return <h5 className={cn(base, 'ar:text-lg', className)}>{children}</h5>;
  }
};
