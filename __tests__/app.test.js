const request = require('supertest');
const app = require('../lib/app');

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
    expect(response.text).toEqual('hi');
  });
});
