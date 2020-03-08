module.exports = {
  singleQuote: true,
  trailingComma: 'all',
  overrides: [
    {
      files: ['tsconfig.json'],
      options: { parser: 'json-stringify' },
    },
  ],
};
