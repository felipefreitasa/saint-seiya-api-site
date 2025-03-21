import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/api/reactQueryConfig";
import { characterService } from "../characterService";

export function useCharacterGetList() {
  const { data, isLoading, isError, refetch, isFetching, isRefetching } =
    useQuery({
      queryKey: [QUERY_KEYS.CHARACTER_GET_LIST],
      queryFn: () => characterService.getList(),
      staleTime: 600000,
    });

  return {
    characterList: data,
    characterListError: isError,
    refetchCharacterList: refetch,
    isLoadingCharacterList: isLoading || isFetching || isRefetching,
  };
}
