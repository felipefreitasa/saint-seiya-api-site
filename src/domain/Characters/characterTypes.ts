export interface CharactersApiResponse {
  data: Data;
  status: string;
  results: number;
  pagination: {
    perPage: number;
    totalItems: number;
    totalPages: number;
    currentPage: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
    nextPage: number | null;
    prevPage: number | null;
  };
}

interface Data {
  characters: Character[];
}

export interface Character {
  _id: string;
  name: string;
  rank: string;
  alias: string;
  cloth: string;
  image: string;
  gender: string;
  mentor: string;
  techniques: string[];
  constellation: string;
}
