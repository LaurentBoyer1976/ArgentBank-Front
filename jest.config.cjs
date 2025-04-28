module.exports = {
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy",
    "^react$": "<rootDir>/node_modules/react",
    "^react-dom$": "<rootDir>/node_modules/react-dom",
  },
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  testMatch: ["<rootDir>/__tests__/**/*.test.jsx", "<rootDir>/__tests__/**/*.test.js"],
};