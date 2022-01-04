import { addNum, divide, isPrime } from "./math";

test("adds 1 + 2 to equal 3", () => {
  expect(addNum(1, 2)).toBe(3);
});

test("b can't equal 0", () => {
  expect(() => {
    divide(1, 0);
  }).toThrowError("Unable to divide by 0");
});

test("it is not a prime number", () => {
  expect(isPrime(11)).toBe(true);
});
