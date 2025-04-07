import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export interface UsePaginatedListResult<TData> {
  list: TData[];
  isLoading: boolean;
  refresh: () => void;
  hasNextPage: boolean;
  isError: boolean | null;
  fetchNextPage: () => void;
  isFetchingNextPage: boolean;
}

interface PaginatedListOptions {
  enabled?: boolean;
  staleTime?: number;
}

export interface ApiParams {
  page?: number;
  limit?: number;
}

export function usePaginatedList<Data>(
  queryKey: readonly unknown[],
  getList: ({ limit, page }: ApiParams) => Promise<{
    characters: Data[];
    pagination: {
      hasNextPage: boolean;
      nextPage: number | null;
      currentPage: number;
    };
  }>,
  options?: PaginatedListOptions
): UsePaginatedListResult<Data> {
  const [list, setList] = useState<Data[]>([]);

  const query = useInfiniteQuery({
    queryKey,
    queryFn: ({ pageParam = 1 }) => getList({ page: pageParam, limit: 6 }),
    getNextPageParam: (lastPage) =>
      lastPage.pagination.hasNextPage
        ? lastPage.pagination.nextPage
        : undefined,
    enabled: options?.enabled,
    staleTime: options?.staleTime,
    initialPageParam: 1,
  });

  useEffect(() => {
    if (query.data) {
      const newList = query.data.pages.reduce<Data[]>((prev, curr) => {
        return [...prev, ...curr.characters];
      }, []);
      setList(newList);
    }
  }, [query.data]);

  return {
    list,
    isError: query.isError,
    refresh: query.refetch,
    isLoading: query.isLoading,
    fetchNextPage: query.fetchNextPage,
    hasNextPage: !!query.hasNextPage,
    isFetchingNextPage: query.isFetchingNextPage,
  };
}
