module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '@sact/core': '<rootDir>/../core/src',
    '@sact/cookie': '<rootDir>/../cookie/src',
  },
};
