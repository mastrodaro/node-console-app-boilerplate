module.exports = {
  testEnvironment: "node",
  collectCoverage: true,
  coverageDirectory: "tests/coverage",
  collectCoverageFrom: ["src/**/*.js", "!src/index.js"],
  coverageReporters: ["text", "text-summary", "html"]
};
