module.exports = {
  proseWrap: 'always',
  singleQuote: true,
  trailingComma: 'all',
  semi: false,
  overrides: [
    {
      files: 'packages/@Test/angular/**',
      options: {
        semi: true,
      },
    },
  ],
}
