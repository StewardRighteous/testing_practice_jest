import capitalize from "../code/capitalize";

it(" one word capitalized", () => {
  let testCases = new Map([
    ["hello", "Hello"],
    ["raj", "Raj"],
    ["jam", "Jam"],
  ]);
  testCases.forEach((value, key) => {
    expect(capitalize(key)).toMatch(value);
  });
});

it(" multiple words capitalized", () => {
  expect(capitalize("Hello, How are you?")).toMatch("Hello, How Are You?");
});

it(" words regardless of spaces added to input", () => {
  expect(capitalize("Hello,      How are you?")).toMatch("Hello, How Are You?");
});

it(" one letter capitalized", () => {
  expect(capitalize("h")).toMatch("H");
});

it("no value", () => {
  expect(capitalize()).toMatch("");
});
