var should = require('should-http');
var request = require('supertest');

describe('teamController', function(){
	var url = "http://localhost:8000";

	describe('getAllPlays()', function(){
		it('retrieves all plays', function(done){
			request(url)
			.get('/api/teams/getPlays')
			.end(function(err,res){
				if(err) throw err;
				res.should.have.status(200);
				res.body.should.be.an.instanceOf(Array);
				done();
			});
		});
	});

	describe('getPlay()', function(){
		it('retrieve a specific play', function(done){
			request(url)
			.get('api/team/getPlays/' + '1')
			.end(function(err,res) {
				if(err) throw err;
				res.should.have.status(200);
				res.body.should.be.an.instanceOf(Object);
				done();
			});
		});
	});

	describe('addPlay()', function(){
		it('creates a new play', function(done){
			var play = {
				'team_id_play' : 1,
				'game_id_play' : 1
			};
			request(url)
				.post('/api/teams/addPlay')
				.send(play)
				.end(function(err,res) {
					if(err) throw err;
					res.should.have.status(200);
					done();
				});
		});
	});

	describe('deletePlay()', function() {
		it('deletes a specific play', function(done) {
			request(url)
				.delete('/api/teams/deletePlays/' + '1')
				.end(function(err,res) {
					if(err) throw err;
					res.should.have.status(200);
						res.body.should.be.an.instanceOf(Object);
					done();
				});
		});
	});

	describe('getAllWins()', function(){
		it('retrieves all wins', function(done){
			request(url)
			.get('/api/teams/getWins')
			.end(function(err,res){
				if(err) throw err;
				res.should.have.status(200);
				res.body.should.be.an.instanceOf(Array);
				done();
			});
		});
	});

	describe('getWin()', function(){
		it('retrieve a specific win', function(done){
			request(url)
			.get('api/team/getPlays/' + '1')
			.end(function(err,res) {
				if(err) throw err;
				res.should.have.status(200);
				res.body.should.be.an.instanceOf(Object);
				done();
			});
		});
	});

	describe('addWin()', function(){
		it('creates a new win', function(done){
			var win = {
				'team_id_key' : 1,
				'game_id_key' : 1
			};
			request(url)
				.post('/api/teams/addPlay')
				.send(win)
				.end(function(err,res) {
					if(err) throw err;
					res.should.have.status(200);
					done();
				});
		});
	});

	describe('deleteWin()', function() {
		it('deletes a specific win', function(done) {
			request(url)
				.delete('/api/teams/deleteWin/' + '1')
				.end(function(err,res) {
					if(err) throw err;
					res.should.have.status(200);
						res.body.should.be.an.instanceOf(Object);
					done();
				});
		});
	});

});