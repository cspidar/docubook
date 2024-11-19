import { expect, test } from "vitest";
import { testCases } from "./testCases";
import { tokenize, parseTokens, generateJs, makePrettier } from "./func";

// {
//   input: "",
//   expected: "",
// },

testCases.forEach(({ input, expected }, index) => {
  test(`Test case #${index + 1}: convertToJs converts curl command to JS code correctly`, async () => {
    const tokens = tokenize(input);
    const parsedTokens = parseTokens(tokens);
    const jsCode = generateJs(parsedTokens);
    const formattedCode = await makePrettier(jsCode);
    expect(formattedCode).toBe(expected);
  });
});
