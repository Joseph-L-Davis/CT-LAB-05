const fs = require('fs');
const fsPromises = require('fs').promises;
const createResponse = require('./createResponse');

module.exports = fsPromises.readFile('public/index.html', 'utf8')
  .then(content => fs.writeFile(createResponse({ body: content, status: '200 OK', contentType: 'text/html' })))
  .catch(err => {
    return err;
  });
