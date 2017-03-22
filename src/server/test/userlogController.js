var should = require('should-http');
var request = require('supertest');

describe ('UserLog', function () {
  var url = 'http://localhost:8000';
  describe('addLog()', function () {
    it('adds user log', function (done) {
      var userlog = {
        'user_id' : '1',
        'action' : 'Login'
      };
      request(url)
        .post('/api/userlogs')
        .send(userlog)
        .end(function(err, res) {
          if (err) throw err;
          res.should.have.status(200);
          done();
        })
    });
  });

  describe('getUserlog()', function () {
    it('view userlogs by id', function (done) {
      request(url)
        .get('/api/userlogs/' + '1')
        .end(function(err, res) {
          if (err) throw err;
          res.should.have.status(200);
          res.body.should.be.an.instanceOf(Object);
          done();

        });
    });
  });

  describe('getUserlogs()', function () {
    it('view all userlogs', function (done) {
      request(url)
        .get('/api/userlogs')
        .end(function(err, res) {
          if (err) throw err;
          res.should.have.status(200);
          res.body.should.be.an.instanceOf(Array);
          done();
        });
    });
  });

})
