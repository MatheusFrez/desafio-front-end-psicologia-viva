module.exports = {
    root: true,
    env: {
      node: true,
    },
    parser: "vue-eslint-parser",
    extends: [
      "plugin:vue/essential",
      "plugin:vue/recommended",
      "plugin:vue/strongly-recommended",
    ],
    parserOptions: {
      parser: "@typescript-eslint/parser",
      ecmaVersion: 2020,
      ecmaFeatures: {
        legacyDecotators: true,
      },
    },
    rules: {
      "camelcase": "off",
      "no-console": "warn",
      "no-debugger": "warn",
      "newline-per-chained-call": ["error"],
    },
    overrides: [{
      files: ["*"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
    }, ],
  }
  