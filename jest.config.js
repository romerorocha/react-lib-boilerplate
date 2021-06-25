module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/.jest/jest.setup.ts'],
  testPathIgnorePatterns: ['<rootDir>/lib/', '<rootDir>/node_modules/'],
  roots: ['./src'],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*stories.tsx',
    '!src/index.ts',
    '!src/types/*',
  ],
}
