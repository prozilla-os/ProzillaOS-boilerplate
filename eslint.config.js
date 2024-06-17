// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import reactRefresh from "eslint-plugin-react-refresh";

export default tseslint.config(
	eslint.configs.recommended,
	...tseslint.configs.recommendedTypeChecked,
	{
		languageOptions: {
			parserOptions: {
				project: "./tsconfig.json",
				tsconfigRootDir: import.meta.dirname,
				allowAutomaticSingleRunInference: true,
			},
		},
		ignores: [
			"eslint.config.js",
		],
		plugins: {
			react,
			"react-refresh": reactRefresh
		},
	}
);