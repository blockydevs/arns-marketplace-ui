import ChevronLeftIcon from '@/assets/icons/chevron-left.svg';
import ChevronRightIcon from '@/assets/icons/chevron-right.svg';
import EllipsisIcon from '@/assets/icons/ellipsis.svg';
import { Button } from '@/components/button';
import { cn } from '@/utils/cn';

export interface PaginationProps {
  onPageChange: (index: number) => void;
  totalPages: number;
  activeIndex: number;
}

const drawPagination = (total: number, current: number) => {
  if (total <= 5) return Array.from({ length: total }, (_, i) => i + 1);
  const formatedPages: (number | string)[] = [1];
  if (current > 2) {
    formatedPages.push('...');
  }

  if (current !== 1 && current !== total) {
    formatedPages.push(current);
  }

  if (current < total - 1) {
    formatedPages.push('...');
  }

  formatedPages.push(total);
  return formatedPages;
};

function Pagination({ totalPages, activeIndex, onPageChange }: PaginationProps) {
  return (
    <PaginationContainer>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => {
              onPageChange(activeIndex - 1);
            }}
            disabled={activeIndex === 1}
          />
        </PaginationItem>

        {drawPagination(totalPages, activeIndex).map((el, idx) => {
          if (typeof el === 'string') return <PaginationEllipsis key={idx} />;
          return (
            <PaginationItem key={idx}>
              <PaginationLink
                isActive={el === activeIndex}
                onClick={() => {
                  onPageChange(el);
                }}
              >
                {el}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        <PaginationItem>
          <PaginationNext
            onClick={() => {
              onPageChange(activeIndex + 1);
            }}
            disabled={activeIndex === totalPages}
          />
        </PaginationItem>
      </PaginationContent>
    </PaginationContainer>
  );
}

function PaginationContainer({ className, ...props }: React.ComponentProps<'nav'>) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      className={cn('arns-marketplace-ui ar:mx-auto ar:flex ar:w-full ar:justify-center ar:font-base', className)}
      {...props}
    />
  );
}
function PaginationContent({ className, ...props }: React.ComponentProps<'ul'>) {
  return (
    <ul
      data-slot="pagination-content"
      className={cn('ar:flex ar:flex-row ar:items-center ar:gap-1', className)}
      {...props}
    />
  );
}
function PaginationItem({ ...props }: React.ComponentProps<'li'>) {
  return <li data-slot="pagination-item" {...props} />;
}
type PaginationLinkProps = {
  isActive?: boolean;
} & React.ComponentProps<typeof Button>;

function PaginationLink({ className, isActive, ...props }: PaginationLinkProps) {
  return (
    <Button
      aria-current={isActive ? 'page' : undefined}
      data-slot="pagination-link"
      data-active={isActive}
      variant={isActive ? 'secondary' : 'ghost'}
      {...props}
      className={cn({ 'ar:hover:text-neutral-200': !isActive }, className)}
    />
  );
}
function PaginationPrevious({ className, ...props }: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to previous page"
      size="small"
      className={cn('ar:gap-1 ar:px-2 ar:leading-none ar:sm:px-4 ar:sm:pl-2.5', className)}
      {...props}
    >
      <ChevronLeftIcon width={20} height={20} />
      <span className="ar:mt-0.5 ar:hidden ar:sm:block">Previous</span>
    </PaginationLink>
  );
}
function PaginationNext({ className, ...props }: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to next page"
      size="small"
      className={cn('ar:gap-1 ar:px-2 ar:sm:px-4 ar:sm:pr-2.5', className)}
      {...props}
    >
      <span className="ar:mt-0.5 ar:hidden ar:sm:block">Next</span>
      <ChevronRightIcon width={20} height={20} />
    </PaginationLink>
  );
}
function PaginationEllipsis({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn('ar:flex ar:size-9 ar:items-center ar:justify-center ar:text-neutral-300', className)}
      {...props}
    >
      <EllipsisIcon width={20} height={20} />
      <span className="ar:sr-only">More pages</span>
    </span>
  );
}
export {
  Pagination,
  PaginationContainer,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis
};
