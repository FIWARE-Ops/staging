import prettier from "eslint-plugin-prettier";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [...compat.extends("tamia"), {
    plugins: {
        prettier,
    },

    languageOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
    },

    rules: {
        "prettier/prettier": "error",
        "no-shadow": 0,
        "valid-jsdoc": 0,
    },
}];