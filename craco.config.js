module.exports = {
  plugins: [
    {
      plugin: require('craco-alias'),
      options: {
        source: 'tsconfig',
        tsConfigPath: 'tsconfig.paths.json',
      },
    },
  ],
  babel: {
    presets: [
      '@emotion/babel-preset-css-prop',
      [
        '@babel/preset-react',
        {
          runtime: 'automatic',
          importSource: '@emotion/react',
        },
      ],
    ],
    plugins: ['babel-plugin-twin', 'babel-plugin-macros'],
  },
  style: {
    postcssOptions: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },
  jest: {
    configure: (jestConfig, { env, paths, resolve, rootDir }) => {
      jestConfig.transformIgnorePatterns = [
        '<rootDir>/node_modules/(?!lodash-es)',
        '^.+\\.module\\.(css|sass|scss)$',
      ];
      return jestConfig;
    },
  },
};
