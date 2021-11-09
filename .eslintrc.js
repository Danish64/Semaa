module.exports = {
  root: true,
  extends: ['@react-native-community', 'airbnb', 'airbnb-typescript',
  'airbnb/hooks',
  'plugin:@typescript-eslint/recommended',
  'plugin:@typescript-eslint/recommended-requiring-type-checking',],
  parserOptions: {
     project: './tsconfig.eslint.json'
     },
};
