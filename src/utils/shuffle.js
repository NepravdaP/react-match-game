import { v4 as uuidv4 } from "uuid";

export const setId = (collection) => {
  return collection.map((el) => {
    return { ...el, uniqueId: uuidv4() };
  });
};

export const shuffleCards = (collection) => {
  return setId(
    [...collection, ...collection]
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)
      .map((el) => Object.assign(el, { matched: false }))
  );
};
