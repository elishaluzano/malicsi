var should = require('should-http');
var request = require('supertest');

describe ('Contact', function () {
  var url = 'http://localhost:8000';
  describe('addContact()', function () {
    it('adds contact person in case of emergency', function (done) {
      var contact = {
        'contact_person_name': 'Kano Shuuya',
        'contact_person_relationship': 'Husband',
        'contact_person_number': '09707070707'
      };
      request(url)
        .post('/api/contacts')
        .send(contact)
        .end(function(err, res) {
          if (err) throw err;
          res.should.have.status(200);
          done();
        })
    });
  });

  describe('viewContact()', function () {
    it('view contact by id', function (done) {
      request(url)
        .get('/api/contacts/' + 'Ben West')
        .end(function(err, res) {
          if (err) throw err;
          res.should.have.status(200);
          res.body.should.be.an.instanceOf(Object);
          done();

        });
    });
  });

  describe('viewAllContact()', function () {
    it('view contacts', function (done) {
      request(url)
        .get('/api/contacts')
        .end(function(err, res) {
          if (err) throw err;
          res.should.have.status(200);
          res.body.should.be.an.instanceOf(Array);
          done();
        });
    });
  });

  describe('updateContact()', function () {
    it('update contact', function (done) {
      request(url)
        .put('/api/contacts/updateContact')
        .send({
          'contact_person_relationship': 'Cousin',
          'contact_person_number': '09091178924',
          'contact_person_name': 'Ben West'
          })
        .end(function(err, res) {
          if (err) throw err;
          res.should.have.status(200);
          done();
        });
    });
  });

  describe('deleteContact()', function () {
    it('delete contact', function (done) {
      request(url)
        .delete('/api/contacts/' + 'Ben West')
        .end(function(err, res) {
          if (err) throw err;
          res.should.have.status(200);
          done();
        });
    });
  });

})
