import { useEffect, useRef, useState } from "react";

import { QUERY_KEYS } from "@/api/reactQueryConfig";
import { usePaginatedList } from "@/api/usePaginatedList";
import { characterService } from "@/domain/Characters/characterService";
import { Character } from "@/domain/Characters/characterTypes";

const ranks = ["all", "bronze", "gold", "god", "mariner", "specter", "steel"];

export function useCharacterGetList() {
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [selectedRank, setSelectedRank] = useState<string>(ranks[0]);
  const [displayedList, setDisplayedList] = useState<Character[]>([]);
  const [debouncedRank, setDebouncedRank] = useState<string>(ranks[0]);
  const [rankBeingLoaded, setRankBeingLoaded] = useState<string | null>(null);

  const prevRankRef = useRef(selectedRank);

  const {
    list,
    isError,
    refresh,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = usePaginatedList(
    [QUERY_KEYS.CHARACTER_GET_LIST, debouncedRank],
    ({ page, limit }) =>
      characterService.getList({
        page,
        limit,
        rank: debouncedRank === "all" ? undefined : debouncedRank,
      })
  );

  useEffect(() => {
    if (selectedRank !== prevRankRef.current) {
      const timeout = setTimeout(() => {
        setDebouncedRank(selectedRank);
        setRankBeingLoaded(selectedRank);
        prevRankRef.current = selectedRank;
      }, 300);

      return () => clearTimeout(timeout);
    }
  }, [selectedRank]);

  useEffect(() => {
    if (!isLoading && rankBeingLoaded === debouncedRank) {
      const timeout = setTimeout(() => {
        setRankBeingLoaded(null);
      }, 600);

      return () => clearTimeout(timeout);
    }
  }, [isLoading, debouncedRank, rankBeingLoaded]);

  useEffect(() => {
    if (!isLoading && rankBeingLoaded === null) {
      setDisplayedList(list);
    }
  }, [isLoading, rankBeingLoaded, list]);

  useEffect(() => {
    if (!isLoading && isInitialLoading) {
      setIsInitialLoading(false);
    }
  }, [isLoading, isInitialLoading]);

  return {
    ranks,
    isError,
    refresh,
    hasNextPage,
    selectedRank,
    fetchNextPage,
    setSelectedRank,
    rankBeingLoaded,
    isInitialLoading,
    isFetchingNextPage,
    list: displayedList,
  };
}
