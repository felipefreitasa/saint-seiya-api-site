const getAllCharacters = `// GET https://www.saintseiyaapi.com/api/characters
{
  "status": "success",
  "results": 16,
  "data": {
    "characters": [
      {
        "_id": "67d47a5d211d5f850883bb8b",
        "name": "seiya",
        "alias": "pegasus seiya",
        "gender": "male",
        "constellation": "pegasus",
        "rank": "bronze",
        "cloth": "pegasus cloth",
        "mentor": "marin",
        "techniques": [
          "pegasus ryuseiken",
          "pegasus suiseiken"
        ],
        "image": "https://www.saintseiyaapi.com/assets/seiya.jpeg"
      }
      // ...
    ]
  }
}`;

const getSingleCharacter = `// GET https://www.saintseiyaapi.com/api/characters/67d47a5d211d5f850883bb8c
{
  "status": "success",
  "data": {
    "_id": "67d47a5d211d5f850883bb8c",
    "name": "shiryu",
    "alias": "dragon shiryu",
    "gender": "male",
    "constellation": "dragon",
    "rank": "bronze",
    "cloth": "dragon cloth",
    "mentor": "dohko",
    "techniques": [
      "rozanha",
      "excalibur"
    ],
    "image": "https://www.saintseiyaapi.com/assets/shiryu.jpeg"
  }
}
`;

const getCharactersWithQuery = `// GET https://www.saintseiyaapi.com/api/characters?limit=2&page=3
{
  "status": "success",
  "results": 16,
  "data": {
    "characters": [
      {
        "_id": "67d4799f88b6755996ca53b0",
        "name": "milo",
        "alias": "scorpio milo",
        "gender": "male",
        "constellation": "scorpio",
        "rank": "gold",
        "cloth": "scorpio cloth",
        "mentor": "unknown",
        "techniques": [
          "scarlet needle",
          "antares"
        ],
        "image": "https://www.saintseiyaapi.com/assets/milo.jpeg"
      },
      {
        "_id": "67d47a5d211d5f850883bb8d",
        "name": "hyoga",
        "alias": "cygnus hyoga",
        "gender": "male",
        "constellation": "cygnus",
        "rank": "bronze",
        "cloth": "cygnus cloth",
        "mentor": "camus",
        "techniques": [
          "diamond dust",
          "aurora execution"
        ],
        "image": "https://www.saintseiyaapi.com/assets/hyoga.jpeg"
      }
    ]
  }
}
`;

export const apiResponseExamples = {
  getAllCharacters,
  getSingleCharacter,
  getCharactersWithQuery,
};
