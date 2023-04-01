"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomeMarvelCharacter = exports.randomCharacterIdx = exports.charaterCollection = void 0;
exports.charaterCollection = [
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
const randomCharacterIdx = function* () {
    let length = exports.charaterCollection.length;
    let i = 0;
    while (i < length) {
        const randomIndex = Math.floor(Math.random() * exports.charaterCollection.length);
        const randomCharacter = exports.charaterCollection.splice(randomIndex, 1).join("");
        console.log(exports.charaterCollection.length);
        i++;
        yield randomCharacter;
    }
};
exports.randomCharacterIdx = randomCharacterIdx;
// GET a random characater name
const randomeMarvelCharacter = () => {
    const randomCharacterGenerator = (0, exports.randomCharacterIdx)();
    return randomCharacterGenerator.next().value;
};
exports.randomeMarvelCharacter = randomeMarvelCharacter;
