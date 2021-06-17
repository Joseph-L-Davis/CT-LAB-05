const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => { 
  it('GET text from /index.html', async() => {
    const res = await request(app)
      .get('/index.html');

    console.log(res.text);
    expect(res.text).toEqual('AM I DOING THIS RIGHT?');
  });  
});
