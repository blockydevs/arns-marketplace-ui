import { useRef, useState } from 'react';

// custom hook for managing cursor-based pagination with pages
export function useCursorPagination(pageSize = 10) {
  const [page, setPage] = useState(1);
  const cursorsRef = useRef<Record<number, string | undefined>>({ 1: undefined });

  const getCurrentCursor = () => {
    return cursorsRef.current[page];
  };

  const storeNextCursor = (nextCursor: string | undefined, hasMore: boolean) => {
    if (nextCursor && hasMore) {
      cursorsRef.current[page + 1] = nextCursor;
    }
  };

  const getTotalPages = (totalItems?: number) => {
    if (typeof totalItems !== 'number') {
      return 1;
    }

    return Math.max(1, Math.ceil(totalItems / pageSize));
  };

  const handlePageChange = (newPage: number) => {
    if (newPage in cursorsRef.current || newPage === 1) {
      setPage(newPage);
    }
  };

  return {
    page,
    pageSize,
    cursor: getCurrentCursor(),
    setPage: handlePageChange,
    storeNextCursor,
    getTotalPages
  };
}
