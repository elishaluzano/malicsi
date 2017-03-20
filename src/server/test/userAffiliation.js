var should = require('should-http');
var request = require('supertest');

describe('User Affiliation', function(){
	 var url = 'http://localhost:8000';
	 describe('viewAllUserAffiliation()', function(){
		 it('retrieves all user affiliations', function(done){
			 request(url)
			 .get('/api/users/userAffiliations')
			 .end(function(err,res){
				 if(err) throw err;
				 try{
				 	res.should.have.status(200);
				 	res.body.should.be.an.instanceOf(Array);
				 }catch(e){
				 	done();
				 }
			 });
		 });
	 });

	 describe('viewUserAffiliation()', function () {
		 it('retrieves a specific user affiliation', function (done) {
			 request(url)
				 .get('/api/users/userAffiliations/' + '2')
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
				 .post('/api/users/userAffiliations')
				 .send(new_user_affiliation)
				 .end(function(err, res) {
					 if (err) throw err;
					 res.should.have.status(200);
					 done();
				 });
		 });
	 });

	 describe('deleteWins()', function () {
		 it('deletes a specific user affiliation', function (done) {
			 request(url)
				 .delete('/api/users/userAffiliations/' + '4')
				 .end(function(err, res) {
					 if (err) throw err;
					 res.should.have.status(200);
					 	res.body.should.be.an.instanceOf(Object);
					 done();
				 });
		 });
	 });
});
