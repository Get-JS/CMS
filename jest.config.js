module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleDirectories: ['node_modules', 'src'],
  testRegex: '.test.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  moduleNameMapper: {
    '@/(.+)$': '<rootDir>/src/$1',
  },
  modulePaths: ['<rootDir>'],
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!lodash-es)'],
};
