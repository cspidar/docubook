// conversionUtils.js
import { curlToJs } from "./func";
import prettier from "prettier/standalone";
import * as parserBabel from "prettier/parser-babel";
import * as parserEstree from "prettier/plugins/estree";

export async function convertCurlToJs(plainPc) {
  const result = curlToJs(plainPc);
  const formattedCode = await prettier.format(result, {
    semi: true,
    parser: "babel",
    plugins: [parserBabel, parserEstree],
  });
  return formattedCode;
}
