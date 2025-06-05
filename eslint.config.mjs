// eslint.config.js
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  js.configs.recommended,
  tseslint.configs.recommended,
  {
    files: ["**/*.{js,ts,jsx,tsx}"],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: globals.browser,
    },
    plugins: {
      react: pluginReact,
    },
    rules: {
      ...pluginReact.configs.recommended.rules,

      // ✅ Custom rule overrides
      "@typescript-eslint/ban-types": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-require-imports": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "react/display-name": "off",
      "react/prop-types": "off",
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      "react/no-unescaped-entities": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-empty-object-types": "off",
      "@typescript-eslint/no-unsafe-function-type": "off",
      "@typescript-eslint/no-unused-expressions": "off",
      "no-redeclare": "off",
      "no-prototype-builtins": "off",
      "@typescript-eslint/no-this-alias": "off",
      "no-control-regex": "off",
      "no-empty": "off",
      "no-undef": "off",
      "valid-typeof": "off",
      "no-fallthrough": "off",
      "no-self-assign": "off",
      "no-cond-assign": "off",
      "no-case-declarations": "off",
      "no-func-assign": "off",
      "getter-return": "off",
      "no-useless-escape": "off",
      "no-misleading-character-class": "off",
      "no-unused-private-class-members": "off",
      "no-async-promise-executor": "off",
      "no-useless-catch": "off",
      "no-sparse-arrays": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
]);
