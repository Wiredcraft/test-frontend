module.exports = {
  testEnvironment: 'jsdom',
  testRegex: 'client/__test__/(.+)\\.test\\.(jsx?|tsx?)$', 
  transform: {
    '^.+\\.tsx?$': '<rootDir>/node_modules/babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    "\\.(less|scss)$": "<rootDir>/client/__test__/__mocks__/styleMock.js",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/client/__test__/__mocks__/fileMock.js",
    "^store(.*)$": "<rootDir>/client/store$1",
    "^utils(.*)$": "<rootDir>/client/utils$1"
  }
};