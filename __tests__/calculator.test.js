import { divide } from "../src/calculator.js";

describe("divide function", () => {

  test("divides two valid numbers correctly", () => {
    expect(divide(10, 2)).toBe(5);
  });

  test("throws error if first argument is not a number", () => {
    expect(() => divide("10", 2)).toThrow(TypeError);
  });

  test("throws error if second argument is not a number", () => {
    expect(() => divide(10, "2")).toThrow(TypeError);
  });

  test("throws error if argument is NaN", () => {
    expect(() => divide(NaN, 2)).toThrow(TypeError);
  });

  test("throws error when dividing by zero", () => {
    expect(() => divide(10, 0)).toThrow(RangeError);
  });

});
