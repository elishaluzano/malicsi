var should = require('should-http');
var request = require('supertest');

describe('Account', function() {
    var url = 'http://localhost:8000';
    describe('login()', function(){
        var user = {
            'username' : 'rustymagorian',
            'password' : 'rmagorian'
        };
        it('Logs in a user', function(done){
            request(url)
            .post('/api/login')
            .send(user)
            .end(function(err, res) {
                if (err) throw err;
                res.should.have.status(200);
                    res.body.should.be.an.instanceOf(Object);
                done();
            });
        });
    });
    
    describe('sessions()', function(){
        var sessionUser = {
            'user_id' : '1',
            'name' : 'Rusty Magorian',
            'username' : 'rustymagorian',
            'password' : 'rmagorian',
            'gender' : 'male',
            'birthday' : '1998-01-06',
            'email' : 'rmagorian@up.edu.ph',
            'contact_number' : '09123456789',
            'contact_person' : '1',
            'profile_pic' : null
        };
        it('Retrieves current session user', function(done){
            request(url)
            .post('/api/sessions')
            .send(sessionUser)
            .end(function(err, res) {
                if (err) throw err;
                res.should.have.status(200);
                    res.body.should.be.an.instanceOf(Object);
                done();
            });
        });
    });
    
    describe('addUser()', function() {
       var newUser = {
            'user_id' : '16',
            'name' : 'Maze Fernandez',
            'username' : 'mazerunner',
            'password' : 'labyrinth',
            'gender' : 'female',
            'birthday' : '1996-12-28',
            'email' : 'aafernandez5@up.edu.ph',
            'contact_number' : '09754897197',
            'contact_person' : null,
            'profile_pic' : null
       };
       it('Creates a new user', function(done){
           request(url)
           .post('/api/users')
           .send(newUser)
           .end(function(err, res) {
               if (err) throw err;
               res.should.have.status(200);
                    res.body.should.be.an.instanceOf(Object);
               done();
           });
       });
    });
});

describe('User', function(){
    var url = 'http://localhost:8000';
    describe('getUsers()', function() {
       it('Retrieves all users', function(done){
           request(url)
           .get('/api/users')
           .end(function(err, res) {
               if (err) throw err;
               res.should.have.status(200);
                    res.body.should.be.an.instanceOf(Array);
               done();
           });
       });
    });
    
    describe('getUser()', function() {
       it('Retrieves a user', function(done){
           request(url)
           .get('/api/users/' + '16')
           .end(function(err, res) {
               if (err) throw err;
               res.should.have.status(200);
                    res.body.should.be.an.instanceOf(Object);
               done();
           });
       });
    });
    
    describe('updateUser()', function () {
	    it('Updates a user', function (done) {
		    var user = {
                'name' : 'Maze Fernandez',
                'username' : 'mazerunner',
                'password' : 'coffee',
                'gender' : 'female',
                'birthday' : '1996-12-28',
                'email' : '12mrei@gmail.com',
                'contact_number' : '09754897197',
                'contact_person' : null,
                'profile_pic' : null
			};
			request(url)
		    .put('/api/users/' + '16')
			.send(user)
			.end(function(err, res) {
			    if (err) throw err;
				res.should.have.status(200);
			        res.body.should.be.an.instanceOf(Object);
				done();
			});
		});
	});
    
    describe('deleteUser()', function () {
	    it('Deletes a user', function (done) {
			request(url)
		    .delete('/api/users/' + '16')
			.end(function(err, res) {
			    if (err) throw err;
				res.should.have.status(200);
			        res.body.should.be.an.instanceOf(Object);
				done();
			});
		});
	});
	describe('searchUsers()', function () {
	    it('searches users', function (done) {
			request(url)
		    .get('/api/users/' + 'm')
			.end(function(err, res) {
			    if (err) throw err;
				res.should.have.status(200);
			        res.body.should.be.an.instanceOf(Object);
				done();
			});
		});
	});
});

describe('Admin', function() {
   var url = 'http://localhost:8000';
   describe('checkAdmin()', function(){
        it('checks if user is admin', function (done) {
           request(url)
           .get('/api/checkAdmin/' + '1')
           .end(function(err, res) {
                if (err) throw err;
                res.should.have.status(200);
                    res.body.should.be.an.instanceOf(Object);
                done();
           });
        });
   });
   describe('getAdmins()', function(){
       it('Retrieves all admins', function (done){
          request(url)
          .get('/api/admins')
          .end(function(err, res) {
                if (err) throw err;
                res.should.have.status(200);
                    res.body.should.be.an.instanceOf(Array);
                done();
          });
       });
   });
   describe('getAdmin()', function() {
        it('Retrieves an admin', function (done){
           request(url)
          .get('/api/admins/' + '1')
          .end(function(err, res){
                if (err) throw err;
                res.should.have.status(200);
                    res.body.should.be.an.instanceOf(Object);
                done();
          });
        });
   });
   describe('addAdmin()', function() {
        it('Adds an admin', function (done){
            var newAdmin = {
            'institution_no' : '2',
            'user_no' : '1'
        };
           request(url)
          .post('/api/admins')
          .send(newAdmin)
          .end(function(err, res) {
                if (err) throw err;
                res.should.have.status(200);
                    res.body.should.be.an.instanceOf(Object);
                done();
          });
        });
   });
   describe('deleteAdmin()', function() {
        it('Deletes an admin', function (done){
           request(url)
          .delete('/api/admins/2/1')
          .end(function(err, res) {
                if (err) throw err;
                res.should.have.status(200);
                done();
          });
        });
   });
});