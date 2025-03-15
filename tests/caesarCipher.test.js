import caeserCipher from "../code/caesarCipher";

it("shifts a single letter with given key ", () => {
  const testCases = [
    {
      key: 3,
      expected: new Map([
        ["a", "d"],
        ["b", "e"],
        ["c", "f"],
      ]),
    },
    {
      key: 5,
      expected: new Map([
        ["a", "f"],
        ["b", "g"],
        ["c", "h"],
      ]),
    },
  ];
  testCases.forEach((test) => {
    test.expected.forEach((value, key) => {
      expect(caeserCipher(key, test.key)).toMatch(value);
    });
  });
});

it("shifts a word", () => {
  const testCases = [
    {
      key: 3,
      expected: new Map([
        ["abc", "def"],
        ["bcdef", "efghi"],
        ["cdef", "fghi"],
      ]),
    },
    {
      key: 5,
      expected: new Map([
        ["ab", "fg"],
        ["bcde", "ghij"],
        ["cde", "hij"],
      ]),
    },
  ];
  testCases.forEach((test) => {
    test.expected.forEach((value, key) => {
      expect(caeserCipher(key, test.key)).toMatch(value);
    });
  });
});

it("match case with input", () => {
  const testCases = [
    {
      key: 3,
      expected: new Map([
        ["aBc", "dEf"],
        ["bcDeF", "efGhI"],
        ["Cdef", "Fghi"],
      ]),
    },
    {
      key: 5,
      expected: new Map([
        ["ab", "fg"],
        ["BCDE", "GHIJ"],
        ["cdE", "hiJ"],
      ]),
    },
  ];
  testCases.forEach((test) => {
    test.expected.forEach((value, key) => {
      expect(caeserCipher(key, test.key)).toMatch(value);
    });
  });
});

it("matches the special character", ()=>{
  const testCases = [
    {
      key: 3,
      expected: new Map([
        ["aB@c", "dE@f"],
        ["bcDeF!", "efGhI!"],
        ["Cdef&", "Fghi&"],
      ]),
    },
    {
      key: 5,
      expected: new Map([
        ["*ab", "*fg"],
        ["BCDE^", "GHIJ^"],
        ["cdE#", "hiJ#"],
      ]),
    },
  ];
  testCases.forEach((test) => {
    test.expected.forEach((value, key) => {
      expect(caeserCipher(key, test.key)).toMatch(value);
    });
  });
})

it("shifts a sentence", ()=>{
  expect(caeserCipher("Hello, World!", 3)).toMatch("Khoor, Zruog!")
})

it("empty value", ()=>{
  expect(caeserCipher()).toMatch("");
})