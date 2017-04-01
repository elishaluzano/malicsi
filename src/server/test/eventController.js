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
        .post('/api/events')
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
          res.body.should.be.an.instanceOf(Object);
          done();
        });
    });
  });

  describe('searchEvent()', function () {
    it('search events', function (done) {
      request(url)
        .get('/api/events/search/' + 'ics')
        .end(function(err, res) {
          if (err) throw err;
          res.should.have.status(200);
          res.body.should.be.an.instanceOf(Object);
          done();
        });
    });
  });

  describe('updateEvent()', function () {
    it('update event', function (done) {
      request(url)
        .put('/api/events/' + '1')
        .send({
            'event_title': "CemCemlympics",
            'venue': "Baker Hall",
            'start_date': "2017-04-23",
            'end_date': "2017-05-09"
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