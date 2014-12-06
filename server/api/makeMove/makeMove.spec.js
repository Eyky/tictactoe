var should = require('should');
var app = require('../../app');
var request = require('supertest');

describe('POST /api/makeMove', function() {
  it('should respond with event in JSON array', function(done) {
    var command =     {
      id: "1",
      cmd: "MakeMove",
      user: {
        userName: "Eyky"
      },
      move: "2",
      name: "LeGame",
      timeStamp: "2014-12-02T11:29:29"
    };


    var req = request(app);
    req
      .post('/api/makeMove')
      .type('json')
      .send(command)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.be.instanceof(Array);
        done();
      });
  });


});
