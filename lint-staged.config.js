module.exports = {
  '**/*.(ts|tsx)': () => 'tsc --pretty --noEmit',
  '**/*.(ts|tsx|js)': (filenames) => [
    `yarn lint --fix ${filenames.join(' ')}`,
    `yarn prettier --write ${filenames.join(' ')}`,
  ],
}
