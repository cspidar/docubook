import prettier from "prettier/standalone";
import * as parserBabel from "prettier/parser-babel";
import * as parserEstree from "prettier/plugins/estree";

export async function makePrettier(generatedCode) {
  const formattedCode = await prettier.format(generatedCode, {
    semi: true,
    parser: "babel",
    plugins: [parserBabel, parserEstree],
  });
  return formattedCode;
}
