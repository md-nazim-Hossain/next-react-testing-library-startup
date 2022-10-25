/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",

  // jest: {
  //   transform: {
  //     // '^.+\\.[tj]sx?$' to process js/ts with `ts-jest`
  //     // '^.+\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`
  //     "^.+\\.tsx?$": [
  //       "ts-jest",
  //       {
  //         tsconfig: {
  //           tsconfig: false,
  //         },
  //       },
  //     ],
  //   },
  // },
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
