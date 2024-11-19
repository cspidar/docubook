import { expect, test } from "vitest";
import { convertCurlToJs } from "./conversionUtils";
import { testCases } from "./testCases";

// {
//   input: "",
//   expected: "",
// },

testCases.forEach(({ input, expected }, index) => {
  test(`Test case #${index + 1}: convertCurlToJs converts curl command to JS code correctly`, async () => {
    const result = await convertCurlToJs(input);
    expect(result).toBe(expected);
  });
});
