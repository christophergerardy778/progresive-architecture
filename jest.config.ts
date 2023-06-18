import type { Config } from '@jest/types';
import dotenv from 'dotenv';

dotenv.config({
  path: '.env.test',
});

const config: Config.InitialOptions = {
  testEnvironment: 'node',
  verbose: true,
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      { isolatedModules: true },
    ],
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

// eslint-disable-next-line import/no-default-export
export default config;
