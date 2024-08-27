module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "no-unsafe-optional-chaining": "off",
    "no-nonoctal-decimal-escape": "off",
    "import/prefer-default-export": "off",
    quotes: ["error", "double"],
  },
};
