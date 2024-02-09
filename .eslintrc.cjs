module.exports = {
  extends: [
    'ts-standard',
    'plugin:astro/recommended'
  ],
  env: {
    // Enables global variables available in Astro components.
    node: true,
    'astro/astro': true,
    es2020: true
  },
  overrides: [
    {
      // Define the configuration for `.astro` file.
      files: ['*.astro'],
      // Allows Astro components to be parsed.
      parser: 'astro-eslint-parser',
    }
  ]
}
