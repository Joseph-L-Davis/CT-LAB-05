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
      socket.write(createResponse({ body: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1> red </h1>
</body>
</html>`, status: '200 OK', contentType: 'text/html' }));
    } else if(path === '/green'){
      socket.write(createResponse({ body: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1> green </h1>
</body>
</html>`, status: '200 OK', contentType: 'text/html' }));
    } else if(path === '/blue'){
      socket.write(createResponse({ body: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1> blue </h1>
</body>
</html>`, status: '200 OK', contentType: 'text/html' }));
    }
    // socket.end(createResponse({ body: 'Not Found', status: '404 Not Found', contentType: 'text/plain' })); // REPLACE WITH IF/ELSE
  });
});

module.exports = app;
