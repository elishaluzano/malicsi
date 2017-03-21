var should = require('should-http'),
	request = require('supertest');

describe('Institution', function () {
	var url = 'http://localhost:8000';
	describe('addSponsoringInstitution()', function () {
		 it('adds institution', function (done) {
			 var institution = {
				 'name': 'CVM',
				 'description': 'College of Vet Med'
			 };
			 request(url)
				 .post('/api/institutions/addSponsoringInstitution')
				 .send(institution)
				 .end(function(err, res) {
					 if (err) throw err;
					 res.should.have.status(200);
					 done();
				 });
		 });
	 });

	describe('viewSponsoringInstitution()', function () {
		 it('view institution by id', function (done) {
			 request(url)
				 .get('/api/institutions/' + '1')
				 .end(function(err, res) {
					 if (err) throw err;
					 res.should.have.status(200);
					 	res.body.should.be.an.instanceOf(Object);
					 done();
				 });
		 });
	 });

	describe('viewAllSponsoringInstitution()', function(){
		 it('view institutions', function(done){
			 request(url)
			 .get('/api/institutions')
			 .end(function(err,res){
				 if(err) throw err;
				 res.should.have.status(200);
				 res.body.should.be.an.instanceOf(Array);
				 done();
			 });
		 });
	 });

	describe('updateSponsoringInstitution()', function () {
		 it('update institution', function (done) {
			 request(url)
				 .put('/api/institutions/updateSponsoringInstitution')
				 .send({name:"CVMM", description: "College of Veterany Medicine", institution_id: "11"})
				 .end(function(err, res) {
					 if (err) throw err;
					 res.should.have.status(200);
					 done();
				 });
		 });
	 });

	describe('deleteSponsoringInstitution()', function () {
		 it('delete institution', function (done) {
			 request(url)
				 .delete('/api/institutions/delete/' + '11')
				 .end(function(err, res) {
					 if (err) throw err;
					 res.should.have.status(200);
					 done();
				 });
		 });
	 });
});
