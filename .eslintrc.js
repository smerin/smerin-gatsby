module.exports = {
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double"]
  },
  env: {
    browser: true,
    es6: true
  },
  plugins: ["react"],
  globals: {
    graphql: false
  },
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 8,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    }
  }
};
