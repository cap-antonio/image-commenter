module.exports = {
  '**/*.(ts|tsx)': () => 'tsc --pretty --noEmit',

  '**/*.(ts|tsx|js)': (filenames) => [
    `yarn eslint --fix ${filenames.join(' ')}`,
    `yarn prettier --write ${filenames.join(' ')}`,
  ],
}
