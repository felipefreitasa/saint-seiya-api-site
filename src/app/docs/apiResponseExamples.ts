const getAllCharacters = `// GET https://www.saintseiyaapi.com/api/characters
{
  "status": "success",
  "results": 90,
  "pagination": {
    "totalItems": 90,
    "totalPages": 9,
    "currentPage": 1,
    "perPage": 10,
    "hasNextPage": true,
    "hasPrevPage": false,
    "nextPage": 2,
    "prevPage": null
  },
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
        "image": "https://saintseiyaapi-71b85b0cc3ba.herokuapp.com/assets/seiya.jpeg"
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
    "image": "https://saintseiyaapi-71b85b0cc3ba.herokuapp.com/assets/shiryu.jpeg"
  }
}
`;

const getCharactersWithQuery = `// GET https://www.saintseiyaapi.com/api/characters?limit=2&page=3
{
  "status": "success",
  "results": 2,
  "pagination": {
    "totalItems": 90,
    "totalPages": 45,
    "currentPage": 3,
    "perPage": 2,
    "hasNextPage": true,
    "hasPrevPage": true,
    "nextPage": 4,
    "prevPage": 2
  },
  "data": {
    "characters": [
      {
        "_id": "67d4799f88b6755996ca53b3",
        "name": "afrodite",
        "alias": "pisces afrodite",
        "gender": "male",
        "constellation": "pisces",
        "rank": "gold",
        "cloth": "pisces cloth",
        "mentor": "unknown",
        "techniques": [
          "piranhan roses",
          "royal demon rose"
        ],
        "image": "https://saintseiyaapi-71b85b0cc3ba.herokuapp.com/assets/afrodite.jpeg"
      },
      {
        "_id": "67d4799f88b6755996ca53ac",
        "name": "deathmask",
        "alias": "cancer deathmask",
        "gender": "male",
        "constellation": "cancer",
        "rank": "gold",
        "cloth": "cancer cloth",
        "mentor": "unknown",
        "techniques": [
          "sekishiki meikai ha"
        ],
        "image": "https://saintseiyaapi-71b85b0cc3ba.herokuapp.com/assets/deathmask.jpeg"
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
