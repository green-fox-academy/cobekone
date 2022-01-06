import { anagram } from "./anagram";

test("should return true", () => {
  expect(anagram("santa", "satan")).toEqual(true);
});

test("should return false", () => {
  expect(anagram("télapó", "sátán")).toEqual(false);
});
