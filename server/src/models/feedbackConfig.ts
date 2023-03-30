export const charaterCollection: string[] = [
  "Ajax",
  "Agent Mobius",
  "Aneka",
  "America Chavez",
  "Ant Man",
  "Ayo",
  "Baron Mordor",
  "Drax",
  "Dr Strange",
  "Everette Ross",
  "Gamora",
  "Goose",
  "Groot",
  "Kang",
  "Loki",
  "M'baku",
  "Nakia",
  "Namor",
  "Thor",
  "Valkyrie",
  "Wanda Maximoff",
  "Yelena",
  "Yondu",
];

export const randomCharacterIdx = function* (): any {
  const charLength = charaterCollection.length;

  while (charLength) {
    const randomName = yield charaterCollection[
      Math.floor(Math.random() * charaterCollection.length)
    ];

    const randomCharacter = charaterCollection.splice(randomName, 1);
    console.log(charLength);
    return yield randomCharacter.join("");
  }
};