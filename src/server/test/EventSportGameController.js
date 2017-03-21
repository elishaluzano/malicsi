var should = require('should-http');
var request = require('supertest');

describe ('Event', function () {
  var url = 'http://localhost:8000';
  describe('addEvent()', function () {
    it('adds event', function (done) {
      var event = {
        'event_title': 'CEMlympics',
        'venue': 'Copeland Gym',
        'start_date': '2017-03-02',
        'end_date': '2017-03-07',
        'institution_id_key': '10'
      };
      request(url)
        .post('/api/events/addEvent')
        .send(event)
        .end(function(err, res) {
          if (err) throw err;
          res.should.have.status(200);
          done();
        })
    });
  });

  describe('viewEvent()', function () {
    it('view event by id', function (done) {
      request(url)
        .get('/api/events/' + '1')
        .end(function(err, res) {
          if (err) throw err;
          res.should.have.status(200);
          res.body.should.be.an.instanceOf(Object);
          done();
        });
    });
  });

  describe('viewAllEvent()', function () {
    it('view events', function (done) {
      request(url)
        .get('/api/events')
        .end(function(err, res) {
          if (err) throw err;
          res.should.have.status(200);
          res.body.should.be.an.instanceOf(Array);
          done();
        });
    });
  });

  describe('updateEvent()', function () {
    it('update event', function (done) {
      request(url)
        .put('/api/events/updateEvent')
        .send({
            'event_title': "CemCemlympics",
            'venue': "Baker Hall",
            'start_date': "2017-04-23",
            'end_date': "2017-05-09",
            'event_id': "1" 
            })
        .end(function(err, res) {
          if (err) throw err;
          res.should.have.status(200);
          done();
        });
    });
  });

  describe('deleteEvent()', function () {
    it('delete event', function (done) {
      request(url)
        .delete('/api/events/' + '1')
        .end(function(err, res) {
          if (err) throw err;
          res.should.have.status(200);
          done();
        });
    });
  });

})

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

describe ('Game', function () {
  var url = 'http://localhost:8000';
  describe('addGame()', function () {
    it('adds game', function (done) {
      var game = {
        'time': '2017-03-02 01:00:00',
        'min_num_of_players': '4',
        'max_num_of_players': '4',
        'status': 'Ongoing',
        'venue': 'Copeland',
        'sport_id_key': '1'
      };
      request(url)
        .post('/api/games/addGame')
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
      request(url)
        .put('/api/games/updateGame')
        .send({
            'time': '2017-03-02 02:00:00',
        	'min_num_of_players': '2',
        	'max_num_of_players': '6',
        	'status': 'Ongoing',
        	'venue': 'Baker Hall',
        	'sport_id_key': '1',
            'game_id': '1'
            })
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
