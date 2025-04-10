import { QUERY_KEYS } from "@/api/reactQueryConfig";
import { usePaginatedList } from "@/api/usePaginatedList";
import { characterService } from "@/domain/Characters/characterService";
import { Character } from "@/domain/Characters/characterTypes";

export function useCharacterGetList(rank: string) {
  const normalizedRank = rank === "all" ? undefined : rank;

  const {
    list,
    isError,
    refresh,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = usePaginatedList<Character>(
    [QUERY_KEYS.CHARACTER_GET_LIST, rank],
    ({ page, limit }) =>
      characterService.getList({
        page,
        limit,
        rank: normalizedRank,
      })
  );

  return {
    list,
    isError,
    refresh,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  };
}
