var should = require('should-http');
var request = require('supertest');

describe('User Affiliation', function(){
	 var url = 'http://localhost:8000';
	 describe('viewAllUserAffiliation()', function(){
		 it('retrieves all user affiliations', function(done){
			 request(url)
			 .get('/api/useraffiliations')
			 .end(function(err,res){
				 if(err) throw err;
				 	res.should.have.status(200);
				 	res.body.should.be.an.instanceOf(Array);
				 	done();
			 });
		 });
	 });

	 describe('viewUserAffiliation()', function () {
		 it('retrieves a specific user affiliation', function (done) {
			 request(url)
				 .get('/api/useraffiliations/' + '2')
				 .end(function(err, res) {
					 if (err) throw err;
					 res.should.have.status(200);
					 res.body.should.be.an.instanceOf(Object);
					 done();
				 });
		 });
	 });

	 describe('addUserAffiliation()', function () {
		 it('creates a new user affiliation', function (done) {
			 var new_user_affiliation = {
				 'user_no': 3,
				 'affiliation': 'Harmonya'
			 };
			 request(url)
				 .post('/api/useraffiliations')
				 .send(new_user_affiliation)
				 .end(function(err, res) {
					 if (err) throw err;
					 res.should.have.status(200);
					 done();
				 });
		 });
	 });

	 describe('deleteUserAffiliation()', function () {
		 it('deletes a specific user affiliation', function (done) {
			 request(url)
				 .delete('/api/useraffiliations/' + '1/' + 'ASTROSOC')
				 .end(function(err, res) {
					 if (err) throw err;
					 res.should.have.status(200);
					 	res.body.should.be.an.instanceOf(Object);
					 done();
				 });
		 });
	 });
});
