import reverseString from "../code/reverseString";

it("reverse a word", () => {
  let testCases = new Map([
    ["hello", "olleh"],
    ["jim", "mij"],
    ["manny", "ynnam"],
  ]);
  testCases.forEach((key, value) => {
    expect(reverseString(key)).toMatch(value);
  });
});

it("reverse word with case difference", () => {
  expect(reverseString("Hello")).toMatch("olleH");
});

it("reverse sentence", ()=>{
    expect(reverseString("Hello! How are you?")).toMatch("?uoy era woH !olleH");
})

it("no word", ()=>{
    expect(reverseString()).toMatch("");
})