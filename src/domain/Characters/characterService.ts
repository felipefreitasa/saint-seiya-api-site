import { api } from "@/api/apiConfig";
import { ApiParams } from "@/api/usePaginatedList";
import { CharactersApiResponse } from "@/domain/Characters/characterTypes";

export const CHARACTER_PATH = "characters";

async function getList({ page = 1, limit = 6, rank }: ApiParams): Promise<{
  characters: CharactersApiResponse["data"]["characters"];
  pagination: {
    hasNextPage: boolean;
    nextPage: number | null;
    currentPage: number;
  };
}> {
  const response = await api.get<CharactersApiResponse>(CHARACTER_PATH, {
    params: {
      page,
      rank,
      limit,
    },
  });

  const { data, pagination } = response.data;

  return {
    characters: data.characters,
    pagination: {
      nextPage: pagination.nextPage,
      hasNextPage: pagination.hasNextPage,
      currentPage: pagination.currentPage,
    },
  };
}

export const characterService = {
  getList,
};
