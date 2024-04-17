module.exports = {
    testEnvironment: 'jsdom', // This specifies that Jest should use jsdom as the testing environment
    setupFilesAfterEnv: ['<rootDir>/setupTests.js'], // Location of setup file for things like enzyme, etc.
    testPathIgnorePatterns: ['/node_modules/'], // Tells Jest to ignore tests in the node_modules folder
    transform: {
      // Tells Jest how to handle imports of certain file types
      '^.+\\.jsx?$': 'babel-jest', // Transform JavaScript and JSX files with babel-jest
    },
    moduleNameMapper: {
      // If you use CSS Modules, this helps to mock them
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },
    collectCoverage: true, // Tells Jest to collect coverage information for tests
    collectCoverageFrom: ['<rootDir>/src/**/*.{js,jsx}'], // Specifies what files coverage should be collected from
    coverageDirectory: '<rootDir>/coverage', // Specifies where to output coverage files
    coverageReporters: ['json', 'lcov', 'text', 'clover'], // Specifies what coverage reports to generate
    transformIgnorePatterns: ['/node_modules/', '/dist/'], // Ignore transformations in specific directories
    // Add Babel presets and plugins configuration
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
    transformIgnorePatterns: ['/node_modules/', '/dist/'],
    // Specify Babel presets and plugins
    transform: {
      '^.+\\.(js|jsx)?$': 'babel-jest',
    },
    // Add Babel presets and plugins configuration
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
    transformIgnorePatterns: ['/node_modules/', '/dist/'],
    // Specify Babel presets and plugins
    transform: {
      '^.+\\.(js|jsx)?$': 'babel-jest',
    },
    // Add Babel presets and plugins configuration
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
    transformIgnorePatterns: ['/node_modules/', '/dist/'],
    // Specify Babel presets and plugins
    transform: {
      '^.+\\.(js|jsx)?$': 'babel-jest',
    },
    // Add Babel presets and plugins configuration
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
    transformIgnorePatterns: ['/node_modules/', '/dist/'],
    // Specify Babel presets and plugins
    transform: {
      '^.+\\.(js|jsx)?$': 'babel-jest',
    },
  };
  