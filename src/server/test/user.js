/*
    Mock data for users
*/

var should = require('should-http');
var request = require('supertest');

describe('UserMockData', function() {
    var url = 'http://localhost:8000';
    describe('addUser()', function() {
       var newUser = {
            'name' : 'admin',
            'username' : 'admin',
            'password' : 'admin',
            'gender' : 'female',
            'birthday' : '2017-04-06',
            'email' : 'admin@up.edu.ph',
            'contact_number' : '09999999999',
            'contact_person' : null,
            'profile_pic' : null,
            'isOverallAdmin' : true
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
    describe('addUser()', function() {
       var newUser = {
            'name' : 'Rusty Magorian',
            'username' : 'rustymagorian',
            'password' : 'rmagorian',
            'gender' : 'male',
            'birthday' : '1998-01-06',
            'email' : 'rmagorian@up.edu.ph',
            'contact_number' : '09123456789',
            'contact_person' : 1,
            'profile_pic' : null,
            'isOverallAdmin' : 0
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
    describe('addUser()', function() {
       var newUser = {
            'name' : 'Chipo Kaufer',
            'username' : 'chipokaufer',
            'password' : 'ckaufer',
            'gender' : 'male',
            'birthday' : '1997-01-06',
            'email' : 'ckaufer@up.edu.ph',
            'contact_number' : '09987654321',
            'contact_person' : 2,
            'profile_pic' : null,
            'isOverallAdmin' : 0
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
    describe('addUser()', function() {
       var newUser = {
            'name' : 'Shad Linton',
            'username' : 'shadlinton',
            'password' : 'slinton',
            'gender' : 'male',
            'birthday' : '1999-01-06',
            'email' : 'slinton@up.edu.ph',
            'contact_number' : '09102938475',
            'contact_person' : 3,
            'profile_pic' : null,
            'isOverallAdmin' : 0
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
    describe('addUser()', function() {
       var newUser = {
            'name' : 'Harve West',
            'username' : 'harvewest',
            'password' : 'hwest',
            'gender' : 'male',
            'birthday' : '1998-02-07',
            'email' : 'hwest@up.edu.ph',
            'contact_number' : '09564738291',
            'contact_person' : 4,
            'profile_pic' : null,
            'isOverallAdmin' : 0
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
    describe('addUser()', function() {
       var newUser = {
            'name' : 'Dean Gofe',
            'username' : 'deangofe',
            'password' : 'dgofe',
            'gender' : 'male',
            'birthday' : '1997-05-25',
            'email' : 'dgofe@up.edu.ph',
            'contact_number' : '09132435467',
            'contact_person' : 5,
            'profile_pic' : null,
            'isOverallAdmin' : 0
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
    describe('addUser()', function() {
       var newUser = {
            'name' : 'Marijoy Aran',
            'username' : 'marijoyaran',
            'password' : 'maran',
            'gender' : 'female',
            'birthday' : '1998-04-23',
            'email' : 'maran@up.edu.ph',
            'contact_number' : '09988776654',
            'contact_person' : 6,
            'profile_pic' : null,
            'isOverallAdmin' : 0
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
    describe('addUser()', function() {
       var newUser = {
            'name' : 'Alan Adriatico',
            'username' : 'alanadriatico',
            'password' : 'aadriatico',
            'gender' : 'male',
            'birthday' : '1999-12-06',
            'email' : 'aadriactico@up.edu.ph',
            'contact_number' : '09267009739',
            'contact_person' : 7,
            'profile_pic' : null,
            'isOverallAdmin' : 0
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
    describe('addUser()', function() {
       var newUser = {
            'name' : 'Antonia Aletaz',
            'username' : 'antoniaaleta',
            'password' : 'aaleta',
            'gender' : 'female',
            'birthday' : '1989-11-06',
            'email' : 'aaleta@up.edu.ph',
            'contact_number' : '09111112234',
            'contact_person' : 8,
            'profile_pic' : null,
            'isOverallAdmin' : 0
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
    describe('addUser()', function() {
       var newUser = {
            'name' : 'Aplasca Morgan',
            'username' : 'aplascamorgan',
            'password' : 'amorgan',
            'gender' : 'male',
            'birthday' : '1994-08-16',
            'email' : 'amorgan@up.edu.ph',
            'contact_number' : '09229933884',
            'contact_person' : 9,
            'profile_pic' : null,
            'isOverallAdmin' : 0
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
    describe('addUser()', function() {
       var newUser = {
            'name' : 'Sam Moran',
            'username' : 'sammoran',
            'password' : 'smoran',
            'gender' : 'female',
            'birthday' : '1994-01-26',
            'email' : 'smoran@up.edu.ph',
            'contact_number' : '09124356785',
            'contact_person' : 10,
            'profile_pic' : null,
            'isOverallAdmin' : 0
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
    describe('addUser()', function() {
       var newUser = {
            'name' : 'Khent Saludo',
            'username' : 'khentsaludo',
            'password' : 'ksaludo',
            'gender' : 'male',
            'birthday' : '1998-11-16',
            'email' : 'ksaludo@up.edu.ph',
            'contact_number' : '09201703170',
            'contact_person' : 11,
            'profile_pic' : null,
            'isOverallAdmin' : 0
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
    describe('addUser()', function() {
       var newUser = {
            'name' : 'Cyryll Platon',
            'username' : 'cyryllplaton',
            'password' : 'cplaton',
            'gender' : 'female',
            'birthday' : '1998-04-24',
            'email' : 'cplaton@up.edu.ph',
            'contact_number' : '09222223145',
            'contact_person' : 12,
            'profile_pic' : null,
            'isOverallAdmin' : 0
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
    describe('addUser()', function() {
       var newUser = {
            'name' : 'Genica Mangilin',
            'username' : 'genicamangilin',
            'password' : 'gmangilin',
            'gender' : 'female',
            'birthday' : '1996-10-03',
            'email' : 'gmangilin@up.edu.ph',
            'contact_number' : '09666555778',
            'contact_person' : 13,
            'profile_pic' : null,
            'isOverallAdmin' : 0
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
    describe('addUser()', function() {
       var newUser = {
            'name' : 'Joyce Sorilla',
            'username' : 'joycesorilla',
            'password' : 'jsorilla',
            'gender' : 'female',
            'birthday' : '1997-07-30',
            'email' : 'jsorilla@up.edu.ph',
            'contact_number' : '09099887765',
            'contact_person' : 14,
            'profile_pic' : null,
            'isOverallAdmin' : 0
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
    describe('addUser()', function() {
       var newUser = {
            'name' : 'Kaye Gonzales',
            'username' : 'kayegonzales',
            'password' : 'kgonzales',
            'gender' : 'female',
            'birthday' : '1998-07-06',
            'email' : 'kgonzales@up.edu.ph',
            'contact_number' : '09236512875',
            'contact_person' : 15,
            'profile_pic' : null,
            'isOverallAdmin' : 0
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
