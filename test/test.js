var request = require('supertest');
var app = require('../app.js');

describe('GET /', function() {
    it('should respond with Hello world.', function(done) {
        request(app).get('/').expect('Hello world.', done);
    });
});