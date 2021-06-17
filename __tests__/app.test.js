const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => { 
  it('GET text from /index.html', async() => {
    const res = await request(app)
      .get('/index.html');

    console.log(res.text);
    expect(res.text).toEqual(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
 Hello, this is dobby the house elf. I'm calling from the grave. 
</body>
</html>`);
  });  
});
