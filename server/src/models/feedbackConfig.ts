export const charaterCollection: string[] = [
  "Ajax",
  "Agent Mobius",
  "Aneka",
  "America Chavez",
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
  let length: number = charaterCollection.length;
  let i = 0;
  while (i < length) {
    const randomIndex: number = Math.floor(
      Math.random() * charaterCollection.length
    );

    const randomCharacter = charaterCollection.splice(randomIndex, 1).join("");
    console.log(charaterCollection.length);
    i++;
    yield randomCharacter;
  }
};

// GET a random characater name
export const randomeMarvelCharacter = () => {
  const randomCharacterGenerator = randomCharacterIdx();

  return randomCharacterGenerator.next().value;
};
