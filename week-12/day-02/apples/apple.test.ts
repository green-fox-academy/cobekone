import { myObject } from "./apple";

test("should return a string: apple", () => {
  expect(myObject.getApple()).toEqual("apple");
});

test("should return a string", () => {
  expect(typeof myObject.getApple()).toBe("string");
});
