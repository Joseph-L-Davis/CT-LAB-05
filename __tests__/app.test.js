const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {
  it('GET html  /index.html', async() => {
    const res = await request(app).get('/index.html');

    expect(res.text).toEqual(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p>AM I DOING THIS RIGHT???</p>
</body>
</html>`);
  });  
});
