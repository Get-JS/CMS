module.exports = {
  modulePaths: ['<rootDir>'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleDirectories: ['node_modules', 'src'],
  testRegex: '.test.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
    '^.+\\.svg$': 'svg-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!lodash-es)'],
  moduleNameMapper: {
    '@assets/(.+)$': '<rootDir>/src/assets/$1',
    '@styles/(.+)$': '<rootDir>/src/assets/styles/$1',
    '@images/(.+)$': '<rootDir>/src/assets/images/$1',
    '@/(.+)$': '<rootDir>/src/$1',
  },
};
