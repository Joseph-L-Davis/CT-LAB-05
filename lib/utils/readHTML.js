const fsPromises = require('fs').promises;

module.exports = async() => {
  return await fsPromises.readFile('public.index.html', () => {})
    .then(contents => contents);
};
