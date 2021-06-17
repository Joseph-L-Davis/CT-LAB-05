const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');
const readHTML = require('./utils/readHTML');

const app = net.createServer(socket => {
  socket.on('data', data => {
    const { path } = parseRequest(data.toString());
    if(path === '/'){
      socket.write(createResponse({ body: 'hi', status: '200 OK', contentType: 'text/plain' }));
    } else if(path === '/index.html') {
      readHTML()
        .then(content => socket.write(createResponse({ body: content, status: '200 OK', contentType: 'text/html' })));
    } else {
      socket.end(createResponse({ body: 'Not Found', status: '404 Not Found', contentType: 'text/plain' }));
    }
  });
});

module.exports = app;
