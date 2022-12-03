module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  testMatch: ["<rootDir>/src/**/__tests__/**/*.test.{ts,tsx}"],
  collectCoverageFrom: ["src/**/__tests__/**/*.test.{ts,tsx}"],
  setupFilesAfterEnv: ["<rootDir>/jest/jest.setup.js"],
  moduleDirectories: ["node_modules", "src"],
  moduleNameMapper: {
    "\\.svg": "<rootDir>/jest/__mocks__/svgr-mock.js",
    "\\.(png|jpg|jpeg)": "<rootDir>/jest/__mocks__/image-mock.js",
  },
};
