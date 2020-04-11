module.exports = {
  testEnvironment: "jsdom",
  collectCoverageFrom: ["**/src/**/*.test.js"],
  coverageThreshold: {
    global: {
      statements: 17,
      branches: 8,
      functions: 20,
      lines: 17,
    },
  },
  moduleNameMapper: {
    "\\.css$": require.resolve("./test/stye-mock.js"),
  },
};
