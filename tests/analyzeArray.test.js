import analyzeArray from "../code/analyzeArray";

it("analyses array and gives average, min, max, length", () => {
  let testCases = [
    {
      input: [1, 2, 3, 4],
      expected: { average: 2.5, min: 1, max: 4, length: 4 },
    },
    {
      input: [1, 8, 3, 4, 2, 6],
      expected: { average: 4, min: 1, max: 8, length: 6 },
    },
    {
      input: [2, 5, 6, 1, 3],
      expected: { average: 3.4, min: 1, max: 6, length: 5 },
    },
  ];
  testCases.forEach(test =>{
    expect(analyzeArray(test.input).average).toBeCloseTo(test.expected.average);
    expect(analyzeArray(test.input).min).toEqual(test.expected.min);
    expect(analyzeArray(test.input).max).toEqual(test.expected.max);
    expect(analyzeArray(test.input).length).toEqual(test.expected.length);
  });
});
