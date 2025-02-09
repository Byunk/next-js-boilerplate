module.exports = {
  '*/**/*.{js,jsx,ts,tsx}': [
    'prettier --ignore-unknown --write',
    'eslint --fix',
    'eslint',
  ],
  '*.{md,css,json}': 'prettier --ignore-unknown --write',
};
