export const GITHUB_URL = "http://localhost:8000/github";

export const FEEDBACK_URL = "http://localhost:8000/feedback";

export const MARVEL_URL = "http://localhost:8000/marvel";

export const BEHANCE =
  "https://www.behance.net/portfolio/editor?project_id=164626013";

export const charaterCollection: string[] = [
  "agent mobius",
  "ajak",
  "amaerican chavez",
  "aneka",
  "ant-man",
  "attuma",
  "ayo",
  "baron mordor",
  "cull obsidian",
  "black panther",
  "t'challa",
  "black widow",
  "yelena",
  "captain america",
  "captain marvel",
  "cassie lang",
  "cerebra",
  "charles xavier",
  "goose",
  "christine palmer",
  "the collector",
  "cyclops",
  "doctore stranger",
];

const randomCharacterIdx = () => {
  return Math.floor(Math.random() * charaterCollection.length);
};

export const randomeMarvelCharacter = () => {
  return charaterCollection.splice(randomCharacterIdx(), 1).join("");
};
