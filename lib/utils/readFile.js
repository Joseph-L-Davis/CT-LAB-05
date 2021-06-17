const fsPromises = require('fs').promises;

module.exports = () => {
  return fsPromises.readFile('public.index.html', () => {})
    .then(contents => contents);
};
