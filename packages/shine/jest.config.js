module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '@sact/core': '<rootDir>/../core/src',
  },
}
