import { useEffect, useRef, useState } from 'react';
import SearchIcon from '@/assets/icons/search.svg';
import XIcon from '@/assets/icons/x.svg';
import { Input, type InputProps } from '@/components/form/input';
import { Spinner } from '@/components/spinner';
import { cn } from '@/utils/cn';

export interface SearchInputProps
  extends Omit<InputProps, 'label' | 'suffix' | 'onChange' | 'value' | 'defaultValue' | 'type'> {
  iconClassName?: string;
  spinnerClassName?: string;
  debounceTime?: number;
  value?: string;
  defaultValue?: string;
  iconSize?: number;
  isPending?: boolean;
  onChange?: (value: string) => void;
  onDebounceChange?: (value: string) => void;
}

function SearchInput({
  name = 'search',
  placeholder = 'Search...',
  iconClassName,
  spinnerClassName,
  wrapperClassName,
  className,
  value,
  defaultValue = '',
  debounceTime = 500,
  iconSize = 20,
  isPending = false,
  onChange,
  onDebounceChange,
  ...rest
}: SearchInputProps) {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const debounceTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isControlled = value !== undefined;
  const searchQuery = isControlled ? value : internalValue;

  function handleInputChange(inputValue: string) {
    if (!isControlled) {
      setInternalValue(inputValue);
    }

    onChange?.(inputValue);

    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }

    debounceTimeoutRef.current = setTimeout(() => {
      onDebounceChange?.(inputValue);
    }, debounceTime);
  }

  function clearSearch() {
    const emptyValue = '';

    if (!isControlled) {
      setInternalValue(emptyValue);
    }

    onChange?.(emptyValue);
    onDebounceChange?.(emptyValue);
  }

  useEffect(() => {
    return () => {
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className={cn('ar:relative', wrapperClassName)}>
      <Input
        name={name}
        type="search"
        placeholder={placeholder}
        className={cn('ar:px-10 ar:[&::-webkit-search-cancel-button]:appearance-none', className)}
        wrapperClassName="ar:max-h-none"
        value={searchQuery}
        readOnly={isPending}
        onChange={(e) => {
          handleInputChange(e.target.value);
        }}
        {...rest}
      />
      <SearchIcon
        className={cn('ar:absolute ar:top-1/2 ar:left-3 ar:-translate-y-1/2 ar:text-white', iconClassName)}
        width={iconSize}
        height={iconSize}
      />
      {searchQuery.length > 0 && (
        <button
          type="button"
          onClick={clearSearch}
          disabled={isPending}
          className={cn(
            'ar:absolute ar:top-1/2 ar:right-3 ar:inline-flex ar:-translate-y-1/2 ar:transform ar:border-none ar:bg-transparent ar:p-0 ar:text-white',
            iconClassName
          )}
        >
          {isPending ? (
            <Spinner className={cn('ar:size-5', spinnerClassName)} />
          ) : (
            <XIcon width={iconSize} height={iconSize} />
          )}
        </button>
      )}
    </div>
  );
}

export { SearchInput };
