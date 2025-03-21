import { api } from "@/api/apiConfig";
import {
  Character,
  CharactersApiResponse,
} from "@/domain/Characters/characterTypes";

export const CHARACTER_PATH = "characters";

async function getList(): Promise<CharactersApiResponse> {
  const response = await api.get<CharactersApiResponse>(CHARACTER_PATH);
  return response.data;
}

async function getById(id: number): Promise<Character> {
  const response = await api.get<Character>(`${CHARACTER_PATH}/${id}`);
  return response.data;
}

export const characterService = {
  getList,
  getById,
};
