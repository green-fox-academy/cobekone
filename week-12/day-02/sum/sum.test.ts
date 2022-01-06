import { Calculator } from "./sum";

describe("calculator.sum", () => {
  let calculatorTest = new Calculator();

  test("should return 10", () => {
    expect(calculatorTest.sum([3, 7])).toEqual(10);
  });
});

describe("calculator.sum", () => {
  let calculatorTest = new Calculator();

  test("should return 10", () => {
    expect(calculatorTest.sum([])).toEqual(0);
  });
});

describe("calculator.sum", () => {
  let calculatorTest = new Calculator();

  test("should return 10", () => {
    expect(calculatorTest.sum([10])).toEqual(10);
  });
});
