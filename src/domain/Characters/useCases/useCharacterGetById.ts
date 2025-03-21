import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/api/reactQueryConfig";
import { characterService } from "../characterService";

export function useCharacterGetById(characterId: number) {
  const { data, isLoading, isError, refetch, isFetching, isRefetching } =
    useQuery({
      queryKey: [QUERY_KEYS.CHARACTER_GET_BY_ID, characterId],
      queryFn: () => characterService.getById(characterId),
      staleTime: 600000,
    });

  return {
    character: data,
    characterError: isError,
    refetchCharacter: refetch,
    isLoadingCharacter: isLoading || isFetching || isRefetching,
  };
}
