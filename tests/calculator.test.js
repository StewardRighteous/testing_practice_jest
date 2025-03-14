import Calculator from "../code/calculator";

const testCases = [
  {
    input: [1, 2],
    expectAdd: 3,
    expectSubtract: -1,
    expectMultiply: 2,
    expectDivision: 0.5,
  },
  {
    input: [2, 3],
    expectAdd: 5,
    expectSubtract: -1,
    expectMultiply: 6,
    expectDivision: 0.666666667,
  },
  {
    input: [5, 7],
    expectAdd: 12,
    expectSubtract: -2,
    expectMultiply: 35,
    expectDivision: 0.714285714,
  },
];

it("Addition of 2 Numbers", () => {
  testCases.forEach((test) => {
    expect(Calculator.add(test.input[0], test.input[1])).toEqual(
      test.expectAdd
    );
  });
});

it("Subtraction of 2 Numbers", () => {
  testCases.forEach((test) => {
    expect(Calculator.substract(test.input[0], test.input[1])).toEqual(
      test.expectSubtract
    );
  });
});

it("Multiplication of 2 Numbers", () => {
  testCases.forEach((test) => {
    expect(Calculator.multiply(test.input[0], test.input[1])).toEqual(
      test.expectMultiply
    );
  });
});

it("Division of 2 Numbers", () => {
  testCases.forEach((test) => {
    expect(Calculator.divide(test.input[0], test.input[1])).toBeCloseTo(
      test.expectDivision
    );
  });
});

it("Throw error when division by zero", () => {
  expect(()=> Calculator.divide(5, 0)).toThrow(Error);
});


