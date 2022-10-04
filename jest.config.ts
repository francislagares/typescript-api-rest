import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  moduleFileExtensions: ['ts', 'js'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testMatch: ['**/src/**/*.test.ts'],
  testEnvironment: 'node',
  verbose: true,
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/app/**/*.ts'],
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

export default config;
