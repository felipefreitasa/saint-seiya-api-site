export interface CharactersApiResponse {
  data: Data;
  status: string;
  results: number;
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
