'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');
​
test('groot endpoint', (t) => {
    it('should return a valid user', (done) => {
        request(app)
          .get('/user')
          .expect(200)
          .end((err, res) => {
            expect(err).to.be.null;
    
            expect(res.body.name).to.equal('tobi');
    
            done();
          });
      })
});