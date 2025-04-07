import { QUERY_KEYS } from "@/api/reactQueryConfig";
import { usePaginatedList } from "@/api/usePaginatedList";
import { characterService } from "../characterService";

export function useCharacterGetList() {
  return usePaginatedList(
    [QUERY_KEYS.CHARACTER_GET_LIST],
    characterService.getList
  );
}
