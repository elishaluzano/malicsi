var should = require('should-http');
var request = require('supertest');

describe('Team', function(){
	 var url = 'http://localhost:8000';
	 describe('viewAllTeam()', function(){
		 it('retrieves all teams', function(done){
			 request(url)
			 .get('/api/teams')
			 .end(function(err,res){
				 if(err) throw err;
				 res.should.have.status(200);
				 res.body.should.be.an.instanceOf(Array);
				 done();
			 });
		 });
	 });

	 describe('viewTeam()', function () {
		 it('retrieves a specific team', function (done) {
			 request(url)
				 .get('/api/teams/' + '2')
				 .end(function(err, res) {
					 if (err) throw err;
					 res.should.have.status(200);
					 	res.body.should.be.an.instanceOf(Object);
					 done();
				 });
		 });
	 });

	 describe('addTeam()', function () {
		 it('creates a new team', function (done) {
			 var team = {
				 'name': 'Team Test 2',
				 'event_id_key': 1
			 };
			 request(url)
				 .post('/api/teams')
				 .send(team)
				 .end(function(err, res) {
					 if (err) throw err;
					 res.should.have.status(200);
					 done();
				 });
		 });
	 });

	 describe('updateTeam()', function () {
		 it('updates a team', function (done) {
			 var team = {
				 'name': 'Team Test Update',
				 'event_id_key': 2
			 };
			 request(url)
				 .put('/api/teams/' + '3')
				 .send(team)
				 .end(function(err, res) {
					 if (err) throw err;
					 res.should.have.status(200);
					 done();
				 });
		 });
	 });

	 describe('deleteTeam()', function () {
		 it('deletes a specific team', function (done) {
			 request(url)
				 .get('/api/teams/' + '4')
				 .end(function(err, res) {
					 if (err) throw err;
					 res.should.have.status(200);
					 	res.body.should.be.an.instanceOf(Object);
					 done();
				 });
		 });
	 });
});

describe('Team Relation (isComposedOf)', function(){
	 var url = 'http://localhost:8000';
	 describe('getAllIsComposedOf()', function(){
		 it('retrieves all isComposedOf relations', function(done){
			 request(url)
			 .get('/api/teams/getAllIsComposedOf')
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

	 describe('getIsComposedOf()', function () {
		 it('retrieves a specific isComposedOf relation', function (done) {
			 request(url)
				 .get('/api/teams/getIsComposedOf/' + '2')
				 .end(function(err, res) {
					 if (err) throw err;
					 res.should.have.status(200);
					 res.body.should.be.an.instanceOf(Object);
					 done();
				 });
		 });
	 });

	 describe('addIsComposedOf()', function () {
		 it('creates a new isComposedOf relation', function (done) {
			 var relation = {
				 'team_player_id': 7,
				 'user_player_id': 4
			 };
			 request(url)
				 .post('/api/teams/addIsComposedOf')
				 .send(relation)
				 .end(function(err, res) {
					 if (err) throw err;
					 res.should.have.status(200);
					 done();
				 });
		 });
	 });

	 describe('deleteIsComposedOf()', function () {
		 it('deletes a specific isComposedOf relation', function (done) {
			 request(url)
				 .delete('/api/teams/isComposedOf/' + '7')
				 .end(function(err, res) {
					 if (err) throw err;
					 res.should.have.status(200);
					 	res.body.should.be.an.instanceOf(Object);
					 done();
				 });
		 });
	 });
});

describe('Team Relation (playsGame)', function(){
	 var url = 'http://localhost:8000';
	 describe('getAllPlays()', function(){
		 it('retrieves all playsGame relations', function(done){
			 request(url)
			 .get('/api/teams/plays')
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

	 describe('getPlays()', function () {
		 it('retrieves a specific playsGame relation', function (done) {
			 request(url)
				 .get('/api/teams/plays/' + '10')
				 .end(function(err, res) {
					 if (err) throw err;
					 res.should.have.status(200);
					 res.body.should.be.an.instanceOf(Object);
					 done();
				 });
		 });
	 });

	 describe('addPlay()', function () {
		 it('creates a new playsGame relation', function (done) {
			 var new_plays = {
				 'team_id_play': 7,
				 'game_id_play': 4
			 };
			 request(url)
				 .post('/api/teams/plays')
				 .send(new_plays)
				 .end(function(err, res) {
					 if (err) throw err;
					 res.should.have.status(200);
					 done();
				 });
		 });
	 });

	 describe('deletePlays()', function () {
		 it('deletes a specific playsGame relation', function (done) {
			 request(url)
				 .delete('/api/teams/plays/' + '1/' +'2')
				 .end(function(err, res) {
					 if (err) throw err;
					 res.should.have.status(200);
					 	res.body.should.be.an.instanceOf(Object);
					 done();
				 });
		 });
	 });
});

describe('Team Relation (winsGame)', function(){
	 var url = 'http://localhost:8000';
	 describe('getAllWins()', function(){
		 it('retrieves all winsGame relations', function(done){
			 request(url)
			 .get('/api/teams/wins')
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

	 describe('getWins()', function () {
		 it('retrieves a specific winsGame relation', function (done) {
			 request(url)
				 .get('/api/teams/wins/' + '2')
				 .end(function(err, res) {
					 if (err) throw err;
					 res.should.have.status(200);
					 res.body.should.be.an.instanceOf(Object);
					 done();
				 });
		 });
	 });

	 describe('addWins()', function () {
		 it('creates a new playsGame relation', function (done) {
			 var new_wins = {
				 'team_id_key': 3,
				 'game_id_key': 2
			 };
			 request(url)
				 .post('/api/teams/wins')
				 .send(new_wins)
				 .end(function(err, res) {
					 if (err) throw err;
					 res.should.have.status(200);
					 done();
				 });
		 });
	 });

	 describe('deleteWins()', function () {
		 it('deletes a specific winsGame relation', function (done) {
			 request(url)
				 .delete('/api/teams/wins/' + '2/' + '1')
				 .end(function(err, res) {
					 if (err) throw err;
					 res.should.have.status(200);
					 	res.body.should.be.an.instanceOf(Object);
					 done();
				 });
		 });
	 });
});
