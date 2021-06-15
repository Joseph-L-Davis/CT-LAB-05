const request = require('supertest');
const app = require('../lib/app');
const parseRequest = require('../lib/utils/parseRequest');

describe('app routes', () => {
  it('GET hi, plain text from /', async() => {
    const res = await request(app).get('/');

    expect(res.text).toEqual('hi');
  });

  it('POST to /echo', async() => {
    const res = await request(app)
      .post('/echo')
      .send({ body: 'hi', status: '200', contentType: 'plain/text' });
    
    const response = await request(app)
      .get('/echo');
    expect(response.text).toEqual(res.text);
  });

  it('GET red', async() => {
    // const red = await request(app)
    //   .post('/red')
    //   .send({ body: , status: '200', contentType: 'plain/text' });

    const res = await request(app)
      .get('/red');
    
    expect(res.text).toEqual(`<!DOCTYPE html>
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
</html>`);
    
  });

  it('GET green', async() => {
    // const red = await request(app)
    //   .post('/red')
    //   .send({ body: , status: '200', contentType: 'plain/text' });

    const res = await request(app)
      .get('/green');
    
    expect(res.text).toEqual(`<!DOCTYPE html>
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
</html>`);
    
  });

  it('GET blue', async() => {
    // const red = await request(app)
    //   .post('/red')
    //   .send({ body: , status: '200', contentType: 'plain/text' });

    const res = await request(app)
      .get('/blue');
    
    expect(res.text).toEqual(`<!DOCTYPE html>
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
</html>`);
    
  });
});
