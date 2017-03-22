var should = require('should-http');
var request = require('supertest');

describe ('Sport', function () {
  var url = 'http://localhost:8000';
  describe('addSport()', function () {
    it('adds sport', function (done) {
      var sport = {
        'name': 'Bridge',
        'event_id_key': '1'
      };
      request(url)
        .post('/api/sports/addSport')
        .send(sport)
        .end(function(err, res) {
          if (err) throw err;
          res.should.have.status(200);
          done();
        })
    });
  });

  describe('viewSport()', function () {
    it('view sport by id', function (done) {
      request(url)
        .get('/api/sports/' + '1')
        .end(function(err, res) {
          if (err) throw err;
          res.should.have.status(200);
          res.body.should.be.an.instanceOf(Object);
          done();
        });
    });
  });

  describe('viewAllSport()', function () {
    it('view sports', function (done) {
      request(url)
        .get('/api/sports')
        .end(function(err, res) {
          if (err) throw err;
          res.should.have.status(200);
          res.body.should.be.an.instanceOf(Array);
          done();
        });
    });
  });

  describe('updateSport()', function () {
    it('update sport', function (done) {
      request(url)
        .put('/api/sports/updateSport')
        .send({
            'name': "Poker",
            'sport_id': "11" 
            })
        .end(function(err, res) {
          if (err) throw err;
          res.should.have.status(200);
          done();
        });
    });
  });

  describe('deleteSport()', function () {
    it('delete sports', function (done) {
      request(url)
        .delete('/api/sports/' + '1')
        .end(function(err, res) {
          if (err) throw err;
          res.should.have.status(200);
          done();
        });
    });
  });

})