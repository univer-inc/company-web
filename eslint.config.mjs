import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import prettier from 'eslint-config-prettier';

const config = [
  ...nextCoreWebVitals,
  prettier,
  {
    rules: {
      '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
  },
];

export default config;
