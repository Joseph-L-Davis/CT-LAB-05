const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');

const app = net.createServer(socket => {
  socket.on('data', data => {
    const { path } = parseRequest(data.toString());
    if(path === '/'){
      socket.write(createResponse({ body: 'hi', status: '200 OK', contentType: 'text/plain' }));
    } else if(path === '/echo'){
      socket.write(createResponse({ body: 'hi', status: '200 OK', contentType: 'text/plain' }));
    } else if(path === '/red'){
      socket.write(createResponse({body}));
    }
    // socket.end(createResponse({ body: 'Not Found', status: '404 Not Found', contentType: 'text/plain' })); // REPLACE WITH IF/ELSE
  });
});

module.exports = app;
