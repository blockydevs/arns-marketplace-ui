import { createElement, type JSX, type PropsWithChildren } from 'react';
import { cn } from '@/utils/cn';

export interface SkeletonProps extends PropsWithChildren {
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  lines?: number;
  size?: '1/3' | '1/2' | '3/4' | '4/5';
}

export const Skeleton = ({ className, as = 'div', size, lines = 0, children }: SkeletonProps) => {
  const content = children ?? [...Array<number>(lines)].map((_, idx) => <br key={idx} />);
  const classes = cn('ar:rounded-sm ar:bg-neutral-800 ar:animate-pulse', className, {
    'ar:w-1/2': size === '1/2',
    'ar:w-1/3': size === '1/3',
    'ar:w-3/4': size === '3/4',
    'ar:w-4/5': size === '4/5'
  });

  return createElement(as, { className: classes }, content);
};
