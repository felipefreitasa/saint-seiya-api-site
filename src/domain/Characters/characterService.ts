import { api } from "@/api/apiConfig";
import { CharactersApiResponse } from "@/domain/Characters/characterTypes";

export const CHARACTER_PATH = "characters";

async function getList(): Promise<CharactersApiResponse> {
  const response = await api.get<CharactersApiResponse>(CHARACTER_PATH);
  return response.data;
}

export const characterService = {
  getList,
};
