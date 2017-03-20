var should = require('should-http');
var request = require('supertest');

describe('Venue', function(){
	 var url = 'http://localhost:8000';
	 describe('viewAllVenue()', function(){
		 it('retrieves all venues', function(done){
			 request(url)
			 .get('/api/venues')
			 .end(function(err,res){
				 if(err) throw err;
				 res.should.have.status(200);
				 res.body.should.be.an.instanceOf(Array);
				 done();
			 });
		 });
	 });

	 describe('viewVenue()', function () {
		 it('retrieves a specific venue', function (done) {
			 request(url)
				 .get('/api/venues/' + '1')
				 .end(function(err, res) {
					 if (err) throw err;
					 res.should.have.status(200);
					 	res.body.should.be.an.instanceOf(Object);
					 done();
				 });
		 });
	 });

	 describe('addVenue()', function () {
		 it('creates a new venue', function (done) {
			 var venue = {
				 'name': 'Venue Test 1'
			 };
			 request(url)
				 .post('/api/venues/addVenue')
				 .send(venue)
				 .end(function(err, res) {
					 if (err) throw err;
					 res.should.have.status(200);
					 done();
				 });
		 });
	 });

	 describe('updateVenue()', function () {
		 it('updates a venue', function (done) {
			 var venue = {
				 'name': 'Venue Test Update',
				 'venue_id' : 1
			 };
			 request(url)
				 .put('/api/venues/updateVenue')
				 .send(venue)
				 .end(function(err, res) {
					 if (err) throw err;
					 res.should.have.status(200);
					 done();
				 });
		 });
	 });

	 describe('deleteVenue()', function () {
		 it('deletes a specific venue', function (done) {
			 request(url)
				 .delete('/api/venues/' + '4')
				 .end(function(err, res) {
					 if (err) throw err;
					 res.should.have.status(200);
					 	res.body.should.be.an.instanceOf(Object);
					 done();
				 });
		 });
	 });
});