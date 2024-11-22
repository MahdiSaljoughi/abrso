module.exports = {
  extends: ['@commitlint/config-conventional'],

  rules: {
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'docs', 'chore', 'style', 'refactor', 'ci', 'test', 'revert', 'perf', 'build'],
    ],
  },
  ignores: [(message) => message.includes('plz build'), (message) => message.includes('hot fix')],
}
