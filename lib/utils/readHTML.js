const fsPromises = require('fs').promises;

module.exports = async() => {
  try {
    return await fsPromises.readFile('public/index.html', () => {})
      .then(content => content);
  } catch(err) {
    return err ;
  }
};
