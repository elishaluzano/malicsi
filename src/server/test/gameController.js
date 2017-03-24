var should = require('should-http');
var request = require('supertest');

describe ('Game', function () {
  var url = 'http://localhost:8000';
  describe('addGame()', function () {
    it('adds game', function (done) {
      var game = {
        'time': '2017-03-02 01:00:00',
        'min_num_of_players': '4',
        'max_num_of_players': '4',
        'status': 'Ongoing',
        'venue': '1',
        'sport_id_key': '1'
      };
      request(url)
        .post('/api/games')
        .send(game)
        .end(function(err, res) {
          if (err) throw err;
          res.should.have.status(200);
          done();
        })
    });
  });

  describe('viewGame()', function () {
    it('view game by id', function (done) {
      request(url)
        .get('/api/games/' + '1')
        .end(function(err, res) {
          if (err) throw err;
          res.should.have.status(200);
          res.body.should.be.an.instanceOf(Object);
          done();

        });
    });
  });

  describe('viewAllGame()', function () {
    it('view games', function (done) {
      request(url)
        .get('/api/games')
        .end(function(err, res) {
          if (err) throw err;
          res.should.have.status(200);
          res.body.should.be.an.instanceOf(Array);
          done();
        });
    });
  });

  describe('updateGame()', function () {
    it('update game', function (done) {
        var game = {
            'venue': '1',
            'time': '2017-03-02 02:00:00',
        	'min_num_of_players': '2',
        	'max_num_of_players': '6',
        	'status': 'Ongoing'
        };
      request(url)
        .put('/api/games/' + '1')
        .send(game)
        .end(function(err, res) {
          if (err) throw err;
          res.should.have.status(200);
          done();
        });
    });
  });

  describe('deleteGame()', function () {
    it('delete games', function (done) {
      request(url)
        .delete('/api/games/' + '1')
        .end(function(err, res) {
          if (err) throw err;
          res.should.have.status(200);
          done();
        });
    });
  });

})
