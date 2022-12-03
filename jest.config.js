module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  testMatch: ["<rootDir>/src/**/__tests__/**/*.test.{ts,tsx}"],
  setupFilesAfterEnv: ["<rootDir>/jest/jest.setup.js"],
  moduleDirectories: ["node_modules", "src"],
  collectCoverageFrom: ["src/**/*.{ts,tsx}", "!**/src/{index,App}.tsx"],
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },
  moduleNameMapper: {
    "\\.svg": "<rootDir>/jest/__mocks__/svg-mock.js",
    "\\.(png|jpg|jpeg)": "<rootDir>/jest/__mocks__/image-mock.js",
  },
};
