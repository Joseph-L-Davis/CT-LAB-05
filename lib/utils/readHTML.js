const fsPromises = require('fs').promises;

module.exports = async() => {
  try {
    return await fsPromises.readFile('public.index.html', () => {})
      .then(contents => contents);
  } catch(err) {
    return err ;
  }
};
