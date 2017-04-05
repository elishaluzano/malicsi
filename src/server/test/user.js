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
    describe('addUser()', function() {
       var newUser = {
            'name' : 'Homer Hallen',
            'username' : 'homerhallen',
            'password' : 'hhallen',
            'gender' : 'male',
            'birthday' : '1996-12-21',
            'email' : 'hhalen@up.edu.ph',
            'contact_number' : '09313151231',
            'contact_person' : 16,
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
            'name' : 'Wacky de Leon',
            'username' : 'wackydeleon',
            'password' : 'wdeleon',
            'gender' : 'male',
            'birthday' : '1996-11-26',
            'email' : 'wdeleon@up.edu.ph',
            'contact_number' : '09297419203',
            'contact_person' : 17,
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
            'name' : 'Reya Ramirez',
            'username' : 'reyaramirez',
            'password' : 'rramirez',
            'gender' : 'female',
            'birthday' : '1997-07-06',
            'email' : 'rramirez@up.edu.ph',
            'contact_number' : '09236512876',
            'contact_person' : 18,
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
            'name' : 'Katleen Santons',
            'username' : 'katleensantons',
            'password' : 'ksantons',
            'gender' : 'female',
            'birthday' : '1998-01-24',
            'email' : 'ksantons@up.edu.ph',
            'contact_number' : '09236512877',
            'contact_person' : 19,
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
            'name' : 'Jerome Jaranilla',
            'username' : 'jeromejaranilla',
            'password' : 'jjarnilla',
            'gender' : 'male',
            'birthday' : '1997-02-21',
            'email' : 'jjarnilla@up.edu.ph',
            'contact_number' : '09236512878',
            'contact_person' : 20,
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
            'name' : 'Josephina Gonzaga',
            'username' : 'josephinagonzaga',
            'password' : 'jgonzaga',
            'gender' : 'female',
            'birthday' : '1996-06-16',
            'email' : 'jgonzaga@up.edu.ph',
            'contact_number' : '09236512879',
            'contact_person' : 21,
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
            'name' : 'Bea Perilla',
            'username' : 'beaperilla',
            'password' : 'bperilla',
            'gender' : 'female',
            'birthday' : '1996-04-17',
            'email' : 'bperilla@up.edu.ph',
            'contact_number' : '09236512880',
            'contact_person' : 22,
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
            'name' : 'Justin Opolensia',
            'username' : 'justinopolensia',
            'password' : 'jopolensia',
            'gender' : 'male',
            'birthday' : '1998-04-25',
            'email' : 'jopolensia@up.edu.ph',
            'contact_number' : '09236512881',
            'contact_person' : 23,
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
            'name' : 'Hayley Steinfeild',
            'username' : 'hayleysteinfeld',
            'password' : 'hsteinfeld',
            'gender' : 'female',
            'birthday' : '1997-09-20',
            'email' : 'hsteinfeld@up.edu.ph',
            'contact_number' : '09236512882',
            'contact_person' : 24,
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
            'name' : 'Taylor Swift',
            'username' : 'taylorswift',
            'password' : 'tswift',
            'gender' : 'female',
            'birthday' : '1989-07-06',
            'email' : 'tswift@up.edu.ph',
            'contact_number' : '09236512883',
            'contact_person' : 25,
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
            'name' : 'Harry Styles',
            'username' : 'harrystyles',
            'password' : 'hstyles',
            'gender' : 'male',
            'birthday' : '1996-03-05',
            'email' : 'hstyles@up.edu.ph',
            'contact_number' : '092365128784',
            'contact_person' : 26,
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
            'name' : 'Bea Binene',
            'username' : 'beabinene',
            'password' : 'bbinene',
            'gender' : 'female',
            'birthday' : '1996-02-07',
            'email' : 'bbinene@up.edu.ph',
            'contact_number' : '09236512890',
            'contact_person' : 27,
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
            'name' : 'Liam Payne',
            'username' : 'liampayne',
            'password' : 'lpayne',
            'gender' : 'male',
            'birthday' : '1996-02-01',
            'email' : 'lpayne@up.edu.ph',
            'contact_number' : '09236512891',
            'contact_person' : 28,
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
            'name' : 'Katherine de Guzman',
            'username' : 'katherinedeguzman',
            'password' : 'kdeguzman',
            'gender' : 'female',
            'birthday' : '1998-07-06',
            'email' : 'kdeguzman@up.edu.ph',
            'contact_number' : '09236512894',
            'contact_person' : 29,
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
            'name' : 'Niall Horan',
            'username' : 'niallhoran',
            'password' : 'nhoran',
            'gender' : 'male',
            'birthday' : '1997-07-06',
            'email' : 'nhoran@up.edu.ph',
            'contact_number' : '09236512896',
            'contact_person' : 30,
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
            'name' : 'Perrie Edwards',
            'username' : 'perrieedwards',
            'password' : 'pedwards',
            'gender' : 'female',
            'birthday' : '1999-02-24',
            'email' : 'pedwards@up.edu.ph',
            'contact_number' : '09236512897',
            'contact_person' : 31,
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
            'name' : 'Jessie Nelson',
            'username' : 'jessienelson',
            'password' : 'jnelson',
            'gender' : 'female',
            'birthday' : '1995-07-06',
            'email' : 'jnelson@up.edu.ph',
            'contact_number' : '09236512898',
            'contact_person' : 32,
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
            'name' : 'Sear Heram',
            'username' : 'searheram',
            'password' : 'sheram',
            'gender' : 'female',
            'birthday' : '1996-09-30',
            'email' : 'searheram@up.edu.ph',
            'contact_number' : '09236512975',
            'contact_person' : 33,
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
            'name' : 'Hera Manson',
            'username' : 'heramanson',
            'password' : 'hmanson',
            'gender' : 'female',
            'birthday' : '1994-02-07',
            'email' : 'hmanson@up.edu.ph',
            'contact_number' : '09236513875',
            'contact_person' : 34,
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
            'name' : 'Jonah Bonde',
            'username' : 'jonahbonde',
            'password' : 'jbonde',
            'gender' : 'male',
            'birthday' : '1993-02-03',
            'email' : 'jbonde@up.edu.ph',
            'contact_number' : '09236522875',
            'contact_person' : 35,
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
            'name' : 'Eren Laon',
            'username' : 'erenlaon',
            'password' : 'elaon',
            'gender' : 'male',
            'birthday' : '1996-08-09',
            'email' : 'elaon@up.edu.ph',
            'contact_number' : '09233512875',
            'contact_person' : 36,
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
            'name' : 'Kia Mendoza',
            'username' : 'kiamendoza',
            'password' : 'kmendoza',
            'gender' : 'female',
            'birthday' : '1999-02-12',
            'email' : 'kmendoza@up.edu.ph',
            'contact_number' : '09336512875',
            'contact_person' : 37,
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
            'name' : 'Elisa Luzano',
            'username' : 'elisaluzano',
            'password' : 'eluzano',
            'gender' : 'female',
            'birthday' : '1997-10-21',
            'email' : 'eluzano@up.edu.ph',
            'contact_number' : '09236512975',
            'contact_person' : 38,
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
            'name' : 'Satom Hecto',
            'username' : 'satomhecto',
            'password' : 'shecto',
            'gender' : 'male',
            'birthday' : '1997-11-24',
            'email' : 'shecto@up.edu.ph',
            'contact_number' : '09235512875',
            'contact_person' : 39,
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
            'name' : 'Elizabeth Fabrae',
            'username' : 'elizabethfabrae',
            'password' : 'efabrae',
            'gender' : 'female',
            'birthday' : '1998-05-14',
            'email' : 'elizabethfabrae@up.edu.ph',
            'contact_number' : '09391731031',
            'contact_person' : 40,
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
            'name' : 'Raymart Lopez',
            'username' : 'raymartlopez',
            'password' : 'rlopez',
            'gender' : 'male',
            'birthday' : '1997-02-18',
            'email' : 'raymartlopez@up.edu.ph',
            'contact_number' : '09394578902',
            'contact_person' : 41,
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
    });describe('addUser()', function() {
       var newUser = {
            'name' : 'Brittany Pierce',
            'username' : 'brittanypierce',
            'password' : 'bpierce',
            'gender' : 'female',
            'birthday' : '1998-11-15',
            'email' : 'brittanypierce@up.edu.ph',
            'contact_number' : '09394578926',
            'contact_person' : null,
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
            'name' : 'Santana Lopez',
            'username' : 'santanalopez',
            'password' : 'rlopez',
            'gender' : 'female',
            'birthday' : '1996-07-15',
            'email' : 'santanalopez@up.edu.ph',
            'contact_number' : '09394589926',
            'contact_person' : null,
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
            'name' : 'Rachell Green',
            'username' : 'rachellgreen',
            'password' : 'rgreen',
            'gender' : 'female',
            'birthday' : '1996-12-08',
            'email' : 'rachellgreen@up.edu.ph',
            'contact_number' : '09564576904',
            'contact_person' : null,
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
            'name' : 'Ross Geller',
            'username' : 'rossgeller',
            'password' : 'rgeller',
            'gender' : 'male',
            'birthday' : '1992-07-25',
            'email' : 'raymartlopez@up.edu.ph',
            'contact_number' : '09394578902',
            'contact_person' : null,
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
            'name' : 'Chandler Bing',
            'username' : 'chandlerbing',
            'password' : 'cbing',
            'gender' : 'male',
            'birthday' : '1997-05-29',
            'email' : 'chandlerbing@up.edu.ph',
            'contact_number' : '09244567978',
            'contact_person' : null,
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
            'name' : 'Phoebe Buffay',
            'username' : 'phoebebuffay',
            'password' : 'pbuffay',
            'gender' : 'female',
            'birthday' : '1995-03-18',
            'email' : 'phoebebuffay@up.edu.ph',
            'contact_number' : '09396788909',
            'contact_person' : null,
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
            'name' : 'Monica Geller',
            'username' : 'monicageller',
            'password' : 'mgeller',
            'gender' : 'female',
            'birthday' : '1996-04-19',
            'email' : 'monicageller@up.edu.ph',
            'contact_number' : '09336578978',
            'contact_person' : null,
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
            'name' : 'Joey Tribbiani',
            'username' : 'joeytribianni',
            'password' : 'jtribianni',
            'gender' : 'male',
            'birthday' : '1990-11-28',
            'email' : 'joeytribianni@up.edu.ph',
            'contact_number' : '09404578569',
            'contact_person' : null,
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
            'name' : 'Ted Mosby',
            'username' : 'tedmosby',
            'password' : 'tmosby',
            'gender' : 'male',
            'birthday' : '1994-12-25',
            'email' : 'tedmosby@up.edu.ph',
            'contact_number' : '09794578786',
            'contact_person' : null,
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
            'name' : 'Robin Scherbatsky',
            'username' : 'robinscherbatsky',
            'password' : 'rscherbatsky',
            'gender' : 'female',
            'birthday' : '1996-05-19',
            'email' : 'robinscherbatsky@up.edu.ph',
            'contact_number' : '09294578490',
            'contact_person' : null,
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
            'name' : 'Barney Stinson',
            'username' : 'barneystinson',
            'password' : 'bstinson',
            'gender' : 'male',
            'birthday' : '1994-07-24',
            'email' : 'barneystinson@up.edu.ph',
            'contact_number' : '09404578675',
            'contact_person' : null,
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
            'name' : 'Lily Aldrin',
            'username' : 'lilyaldrin',
            'password' : 'laldrin',
            'gender' : 'female',
            'birthday' : '1998-05-24',
            'email' : 'lilyaldrin@up.edu.ph',
            'contact_number' : '09364578789',
            'contact_person' : null,
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
            'name' : 'Marshall Eriksen',
            'username' : 'marshalleriksen',
            'password' : 'maeriksen',
            'gender' : 'male',
            'birthday' : '1994-12-20',
            'email' : 'marshalleriksen@up.edu.ph',
            'contact_number' : '09244572442',
            'contact_person' : null,
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
            'name' : 'Tracy McConnell',
            'username' : 'tracymcconnell',
            'password' : 'tmcconnell',
            'gender' : 'female',
            'birthday' : '1997-09-29',
            'email' : 'tracymcconnell@up.edu.ph',
            'contact_number' : '09304578954',
            'contact_person' : null,
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
            'name' : 'Quinn Fabray',
            'username' : 'quinnfabray',
            'password' : 'qfabray',
            'gender' : 'female',
            'birthday' : '1993-07-22',
            'email' : 'quinnfabray@up.edu.ph',
            'contact_number' : '09274578922',
            'contact_person' : null,
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
            'name' : 'Sue Sylvester',
            'username' : 'suesylvester',
            'password' : 'ssylvester',
            'gender' : 'female',
            'birthday' : '1990-01-01',
            'email' : 'suesylvester@up.edu.ph',
            'contact_number' : '09284574224',
            'contact_person' : null,
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
            'name' : 'Rachel Berry',
            'username' : 'rachelberry',
            'password' : 'rberry',
            'gender' : 'female',
            'birthday' : '1996-11-11',
            'email' : 'rachelberry@up.edu.ph',
            'contact_number' : '09244571234',
            'contact_person' : null,
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
            'name' : 'Finn Hudson',
            'username' : 'finnhudson',
            'password' : 'fhudson',
            'gender' : 'male',
            'birthday' : '1996-12-14',
            'email' : 'finnhudson@up.edu.ph',
            'contact_number' : '09674578943',
            'contact_person' : null,
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
            'name' : 'Will Schuester',
            'username' : 'willschuester',
            'password' : 'wschuester',
            'gender' : 'male',
            'birthday' : '1990-05-17',
            'email' : 'willschuester@up.edu.ph',
            'contact_number' : '09404578786',
            'contact_person' : null,
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
            'name' : 'Mercedes Jones',
            'username' : 'mercedesjones',
            'password' : 'mjones',
            'gender' : 'female',
            'birthday' : '1994-06-26',
            'email' : 'mercedesjones@up.edu.ph',
            'contact_number' : '09264578976',
            'contact_person' : null,
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
            'name' : 'Blaine Anderson',
            'username' : 'blaineanderson',
            'password' : 'banderson',
            'gender' : 'male',
            'birthday' : '1994-06-08',
            'email' : 'blaineanderson@up.edu.ph',
            'contact_number' : '09254579078',
            'contact_person' : null,
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
            'name' : 'Sam Evans',
            'username' : 'samevans',
            'password' : 'sevans',
            'gender' : 'male',
            'birthday' : '1997-02-14',
            'email' : 'samevans@up.edu.ph',
            'contact_number' : '09274578987',
            'contact_person' : null,
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
            'name' : 'Mike Chang',
            'username' : 'mikechang',
            'password' : 'mikechang',
            'gender' : 'male',
            'birthday' : '1994-04-14',
            'email' : 'mikechang@up.edu.ph',
            'contact_number' : '09674578967',
            'contact_person' : null,
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
            'name' : 'Marley Rose',
            'username' : 'marleyrose',
            'password' : 'mrose',
            'gender' : 'female',
            'birthday' : '1998-07-28',
            'email' : 'marleyrose@up.edu.ph',
            'contact_number' : '09444578956',
            'contact_person' : null,
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
            'name' : 'Kara Danvers',
            'username' : 'karadanvers',
            'password' : 'kdanvers',
            'gender' : 'female',
            'birthday' : '1998-09-30',
            'email' : 'karadanvers@up.edu.ph',
            'contact_number' : '09784578909',
            'contact_person' : null,
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
            'name' : 'Cat Grant',
            'username' : 'catgrant',
            'password' : 'cgrant',
            'gender' : 'female',
            'birthday' : '1995-09-26',
            'email' : 'catgrant@up.edu.ph',
            'contact_number' : '09404578967',
            'contact_person' : null,
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
            'name' : 'Jimmy Olsen',
            'username' : 'jimmyolsen',
            'password' : 'jolsen',
            'gender' : 'male',
            'birthday' : '1996-09-24',
            'email' : 'jimmyolsen@up.edu.ph',
            'contact_number' : '09494578949',
            'contact_person' : null,
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
            'name' : 'Alex Danvers',
            'username' : 'alexdanvers',
            'password' : 'adanvers',
            'gender' : 'female',
            'birthday' : '1998-07-26',
            'email' : 'alexdanvers@up.edu.ph',
            'contact_number' : '09434578977',
            'contact_person' : null,
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
            'name' : 'Maggie Sawyers',
            'username' : 'maggiesawyers',
            'password' : 'msawyers',
            'gender' : 'female',
            'birthday' : '1997-07-16',
            'email' : 'maggiesawyers@up.edu.ph',
            'contact_number' : '09774578904',
            'contact_person' : null,
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
            'name' : 'Lena Luthor',
            'username' : 'lenaluthor',
            'password' : 'lluthor',
            'gender' : 'female',
            'birthday' : '1990-11-23',
            'email' : 'lenaluthor@up.edu.ph',
            'contact_number' : '09234578933',
            'contact_person' : null,
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
            'name' : 'Barry Allen',
            'username' : 'barryallen',
            'password' : 'ballen',
            'gender' : 'male',
            'birthday' : '1995-03-13',
            'email' : 'barryallen@up.edu.ph',
            'contact_number' : '09784578990',
            'contact_person' : null,
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
            'name' : 'Iris West',
            'username' : 'iriswest',
            'password' : 'iwest',
            'gender' : 'female',
            'birthday' : '1994-08-12',
            'email' : 'iriswest@up.edu.ph',
            'contact_number' : '09234578976',
            'contact_person' : null,
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
            'name' : 'Caitlin Snow',
            'username' : 'caitlinsnow',
            'password' : 'csnow',
            'gender' : 'female',
            'birthday' : '1997-03-19',
            'email' : 'caitlinsnow@up.edu.ph',
            'contact_number' : '09204578930',
            'contact_person' : null,
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
            'name' : 'Cisco Ramon',
            'username' : 'ciscoramon',
            'password' : 'cramon',
            'gender' : 'male',
            'birthday' : '1998-05-15',
            'email' : 'ciscoramon@up.edu.ph',
            'contact_number' : '09124578997',
            'contact_person' : null,
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
            'name' : 'Harrison Wells',
            'username' : 'harrisonwells',
            'password' : 'hwells',
            'gender' : 'male',
            'birthday' : '1999-09-15',
            'email' : 'harrisonwells@up.edu.ph',
            'contact_number' : '09874578998',
            'contact_person' : null,
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
            'name' : 'Joe West',
            'username' : 'joewest',
            'password' : 'jwest',
            'gender' : 'male',
            'birthday' : '1990-12-28',
            'email' : 'joewest@up.edu.ph',
            'contact_number' : '09904578977',
            'contact_person' : null,
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
            'name' : 'Alison DiLaurentis',
            'username' : 'alisondilaurentis',
            'password' : 'adilaurentis',
            'gender' : 'female',
            'birthday' : '1999-06-16',
            'email' : 'alisondilaurentis@up.edu.ph',
            'contact_number' : '09224578967',
            'contact_person' : null,
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
            'name' : 'Aria Montgomery',
            'username' : 'ariamontgomery',
            'password' : 'amontgomery',
            'gender' : 'female',
            'birthday' : '1994-04-24',
            'email' : 'ariamontgomery@up.edu.ph',
            'contact_number' : '09884578980',
            'contact_person' : null,
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
            'name' : 'Emily Fields',
            'username' : 'emilyfields',
            'password' : 'efields',
            'gender' : 'female',
            'birthday' : '1998-09-14',
            'email' : 'emilyfields@up.edu.ph',
            'contact_number' : '09904578955',
            'contact_person' : null,
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
            'name' : 'Spencer Hastings',
            'username' : 'spencerhastings',
            'password' : 'shastings',
            'gender' : 'female',
            'birthday' : '1996-07-17',
            'email' : 'spencerhastings@up.edu.ph',
            'contact_number' : '09784578976',
            'contact_person' : null,
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
            'name' : 'Hannah Marin',
            'username' : 'hannahmarin',
            'password' : 'hmarin',
            'gender' : 'female',
            'birthday' : '1998-09-16',
            'email' : 'hannahmarin@up.edu.ph',
            'contact_number' : '09990578956',
            'contact_person' : null,
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
            'name' : 'Serena van der Woodsen',
            'username' : 'serenavanderwoodsen',
            'password' : 'svanderwoodsen',
            'gender' : 'female',
            'birthday' : '1995-09-12',
            'email' : 'serenavanderwoodsen@up.edu.ph',
            'contact_number' : '09564578984',
            'contact_person' : null,
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
            'name' : 'Blair Waldorf',
            'username' : 'blairwaldorf',
            'password' : 'bwaldorf',
            'gender' : 'female',
            'birthday' : '1993-03-27',
            'email' : 'blairwaldorf@up.edu.ph',
            'contact_number' : '09974578964',
            'contact_person' : null,
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
            'name' : 'Dan Humphrey',
            'username' : 'danhumphrey',
            'password' : 'dhumphrey',
            'gender' : 'male',
            'birthday' : '1994-10-11',
            'email' : 'danhumphrey@up.edu.ph',
            'contact_number' : '09274578925',
            'contact_person' : null,
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
            'name' : 'Nate Archibald',
            'username' : 'natearchibald',
            'password' : 'narchibald',
            'gender' : 'male',
            'birthday' : '1995-08-18',
            'email' : 'natearchibald@up.edu.ph',
            'contact_number' : '09564578954',
            'contact_person' : null,
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
            'name' : 'Chuck Bass',
            'username' : 'chuckbass',
            'password' : 'cbass',
            'gender' : 'male',
            'birthday' : '1994-08-19',
            'email' : 'chuckbass@up.edu.ph',
            'contact_number' : '09564578987',
            'contact_person' : null,
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
            'name' : 'Rufus Humphrey',
            'username' : 'rufushumphrey',
            'password' : 'rhumphrey',
            'gender' : 'male',
            'birthday' : '1997-08-28',
            'email' : 'rufushumphrey@up.edu.ph',
            'contact_number' : '09874578955',
            'contact_person' : null,
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
            'name' : 'Annalise Keating',
            'username' : 'annalisekeating',
            'password' : 'akeating',
            'gender' : 'female',
            'birthday' : '1997-06-18',
            'email' : 'annalisekeating@up.edu.ph',
            'contact_number' : '09774578994',
            'contact_person' : null,
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
            'name' : 'Connor Walsh',
            'username' : 'connorwalsh',
            'password' : 'cwalsh',
            'gender' : 'male',
            'birthday' : '1997-11-26',
            'email' : 'connorwalsh@up.edu.ph',
            'contact_number' : '09294578965',
            'contact_person' : null,
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
            'name' : 'Wes Gibbins',
            'username' : 'wesgibbins',
            'password' : 'wgibbins',
            'gender' : 'male',
            'birthday' : '1999-07-19',
            'email' : 'wesgibbins@up.edu.ph',
            'contact_number' : '09974578958',
            'contact_person' : null,
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
            'name' : 'Laurel Castillo',
            'username' : 'laurelcastillo',
            'password' : 'lcastillo',
            'gender' : 'female',
            'birthday' : '1997-06-14',
            'email' : 'laurelcastillo@up.edu.ph',
            'contact_number' : '09324578976',
            'contact_person' : null,
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
            'name' : 'Michaela Pratt',
            'username' : 'michaelapratt',
            'password' : 'mpratt',
            'gender' : 'female',
            'birthday' : '1991-12-24',
            'email' : 'michaelapratt@up.edu.ph',
            'contact_number' : '09864578966',
            'contact_person' : null,
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
            'name' : 'Asher Millstone',
            'username' : 'ashermillstone',
            'password' : 'amillstone',
            'gender' : 'male',
            'birthday' : '1994-10-29',
            'email' : 'ashermillstone@up.edu.ph',
            'contact_number' : '09774578954',
            'contact_person' : null,
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
            'name' : 'Nate Leahy',
            'username' : 'nateleahy',
            'password' : 'nleahy',
            'gender' : 'male',
            'birthday' : '1994-04-19',
            'email' : 'nateleahy@up.edu.ph',
            'contact_number' : '09784578924',
            'contact_person' : null,
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
            'name' : 'Sherlock Holmes',
            'username' : 'sherlockholmes',
            'password' : 'sholmes',
            'gender' : 'male',
            'birthday' : '1990-06-27',
            'email' : 'sherlockholmes@up.edu.ph',
            'contact_number' : '09194578978',
            'contact_person' : null,
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
            'name' : 'Beatrice Prior',
            'username' : 'beatriceprior',
            'password' : 'bprior',
            'gender' : 'female',
            'birthday' : '1994-08-26',
            'email' : 'beatriceprior@up.edu.ph',
            'contact_number' : '09224578954',
            'contact_person' : null,
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
            'name' : 'Tobias Eaton',
            'username' : 'tobiaseaton',
            'password' : 'teaton',
            'gender' : 'male',
            'birthday' : '1995-07-27',
            'email' : 'tobiaseaton@up.edu.ph',
            'contact_number' : '09724578956',
            'contact_person' : null,
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
            'name' : 'Caleb Prior',
            'username' : 'calebprior',
            'password' : 'cprior',
            'gender' : 'male',
            'birthday' : '1997-11-24',
            'email' : 'calebprior@up.edu.ph',
            'contact_number' : '09184578956',
            'contact_person' : null,
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
            'name' : 'Augustus Waters',
            'username' : 'augustuswaters',
            'password' : 'awaters',
            'gender' : 'male',
            'birthday' : '1994-04-29',
            'email' : 'augustuswaters@up.edu.ph',
            'contact_number' : '09964578958',
            'contact_person' : null,
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
            'name' : 'Hazel Grace',
            'username' : 'hazelgrace',
            'password' : 'hgrace',
            'gender' : 'female',
            'birthday' : '1995-05-29',
            'email' : 'hazelgrace@up.edu.ph',
            'contact_number' : '09674578955',
            'contact_person' : null,
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
            'name' : 'Robert Langdon',
            'username' : 'robertlangdon',
            'password' : 'rlangdon',
            'gender' : 'male',
            'birthday' : '1995-08-22',
            'email' : 'robertlangdon@up.edu.ph',
            'contact_number' : '09784578945',
            'contact_person' : null,
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
            'name' : 'Jeffery Deaver',
            'username' : 'jefferydeaver',
            'password' : 'jdeaver',
            'gender' : 'male',
            'birthday' : '1990-10-24',
            'email' : 'jefferydeaver@up.edu.ph',
            'contact_number' : '09764578954',
            'contact_person' : null,
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
            'name' : 'Percy Jackson',
            'username' : 'percyjackson',
            'password' : 'pjackson',
            'gender' : 'male',
            'birthday' : '1997-06-29',
            'email' : 'percyjackson@up.edu.ph',
            'contact_number' : '09784578880',
            'contact_person' : null,
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
            'name' : 'Annabeth Chase',
            'username' : 'annabethchase',
            'password' : 'achase',
            'gender' : 'female',
            'birthday' : '1995-10-29',
            'email' : 'annabethchase@up.edu.ph',
            'contact_number' : '09184578978',
            'contact_person' : null,
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
            'name' : 'Harry Potter',
            'username' : 'harrypotter',
            'password' : 'hpotter',
            'gender' : 'male',
            'birthday' : '1997-11-28',
            'email' : 'harrypotter@up.edu.ph',
            'contact_number' : '09564578954',
            'contact_person' : null,
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
            'name' : 'Ron Weasley',
            'username' : 'ronweasley',
            'password' : 'rweasley',
            'gender' : 'male',
            'birthday' : '1998-05-24',
            'email' : 'ronweasley@up.edu.ph',
            'contact_number' : '09284578655',
            'contact_person' : null,
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
            'name' : 'Hermione Granger',
            'username' : 'hermionegranger',
            'password' : 'hgranger',
            'gender' : 'female',
            'birthday' : '1996-09-25',
            'email' : 'hermionegranger@up.edu.ph',
            'contact_number' : '09674578975',
            'contact_person' : null,
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
            'name' : 'Albus Dumbledore',
            'username' : 'albusdumbledore',
            'password' : 'adumbledore',
            'gender' : 'male',
            'birthday' : '1990-01-20',
            'email' : 'albusdumbledore@up.edu.ph',
            'contact_number' : '09294578967',
            'contact_person' : null,
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
            'name' : 'Rubeus Hagrid',
            'username' : 'rubeushagrid',
            'password' : 'rhagrid',
            'gender' : 'male',
            'birthday' : '1990-11-27',
            'email' : 'rubeushagrid@up.edu.ph',
            'contact_number' : '09584578980',
            'contact_person' : null,
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
            'name' : 'Minerva McGonagall',
            'username' : 'minervamcgonagall',
            'password' : 'mmcgonagall',
            'gender' : 'female',
            'birthday' : '1997-09-23',
            'email' : 'minervamcgonagall@up.edu.ph',
            'contact_number' : '09684578967',
            'contact_person' : null,
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
            'name' : 'Severus Snape',
            'username' : 'severussnape',
            'password' : 'ssnape',
            'gender' : 'male',
            'birthday' : '1992-07-24',
            'email' : 'severussnape@up.edu.ph',
            'contact_number' : '09274578967',
            'contact_person' : null,
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
            'name' : 'Cedric Diggory',
            'username' : 'cedricdiggory',
            'password' : 'cdiggory',
            'gender' : 'male',
            'birthday' : '1997-07-22',
            'email' : 'cedricdiggory@up.edu.ph',
            'contact_number' : '09274572424',
            'contact_person' : null,
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
            'name' : 'Marcus Flint',
            'username' : 'marcusflint',
            'password' : 'mflint',
            'gender' : 'male',
            'birthday' : '1995-08-05',
            'email' : 'marcusflint@up.edu.ph',
            'contact_number' : '09204578200',
            'contact_person' : null,
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
            'name' : 'Neville Longbottom',
            'username' : 'nevillelongbottom',
            'password' : 'nlongbottom',
            'gender' : 'male',
            'birthday' : '1997-09-24',
            'email' : 'nevillelongbottom@up.edu.ph',
            'contact_number' : '09484578969',
            'contact_person' : null,
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
            'name' : 'Luna Lovegood',
            'username' : 'lunalovegood',
            'password' : 'llovegood',
            'gender' : 'female',
            'birthday' : '1998-11-30',
            'email' : 'lunalovegood@up.edu.ph',
            'contact_number' : '09264578928',
            'contact_person' : null,
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
            'name' : 'Draco Malfoy',
            'username' : 'dracomalfoy',
            'password' : 'dmalfoy',
            'gender' : 'male',
            'birthday' : '1998-09-19',
            'email' : 'dracomalfoy@up.edu.ph',
            'contact_number' : '09254578925',
            'contact_person' : null,
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
            'name' : 'Pansy Parkinson',
            'username' : 'pansyparkinson',
            'password' : 'pparkinson',
            'gender' : 'female',
            'birthday' : '1998-09-22',
            'email' : 'pansyparkinson@up.edu.ph',
            'contact_number' : '09284578965',
            'contact_person' : null,
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
            'name' : 'Ginny Weasley',
            'username' : 'ginnyweasley',
            'password' : 'gweasley',
            'gender' : 'female',
            'birthday' : '1998-12-29',
            'email' : 'ginnyweasley@up.edu.ph',
            'contact_number' : '09304578965',
            'contact_person' : null,
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
            'name' : 'Sirius Black',
            'username' : 'siriusblack',
            'password' : 'sblack',
            'gender' : 'male',
            'birthday' : '1990-03-20',
            'email' : 'siriusblack@up.edu.ph',
            'contact_number' : '09784578909',
            'contact_person' : null,
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
            'name' : 'Remus Lupin',
            'username' : 'remuslupin',
            'password' : 'rlupin',
            'gender' : 'male',
            'birthday' : '1999-07-13',
            'email' : 'remuslupin@up.edu.ph',
            'contact_number' : '09674578965',
            'contact_person' : null,
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
            'name' : 'Viktor Krum',
            'username' : 'viktorkrum',
            'password' : 'vkrum',
            'gender' : 'male',
            'birthday' : '1995-07-06',
            'email' : 'viktorkrum@up.edu.ph',
            'contact_number' : '09204578933',
            'contact_person' : null,
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
            'name' : 'Leia Organa',
            'username' : 'leiaorgana',
            'password' : 'lorgana',
            'gender' : 'female',
            'birthday' : '1999-08-24',
            'email' : 'leiaorgana@up.edu.ph',
            'contact_number' : '09204578788',
            'contact_person' : null,
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
            'name' : 'Luke Skywalker',
            'username' : 'lukeskywalker',
            'password' : 'lskywalker',
            'gender' : 'male',
            'birthday' : '1992-02-16',
            'email' : 'lskywalker@up.edu.ph',
            'contact_number' : '09794578924',
            'contact_person' : null,
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
            'name' : 'Han Solo',
            'username' : 'hansolo',
            'password' : 'hsolo',
            'gender' : 'male',
            'birthday' : '1998-08-25',
            'email' : 'hansolo@up.edu.ph',
            'contact_number' : '09384578902',
            'contact_person' : null,
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
            'name' : 'Willhuff Tarkin',
            'username' : 'willhufftarkin',
            'password' : 'wtarkin',
            'gender' : 'male',
            'birthday' : '1995-09-26',
            'email' : 'willhufftarkin@up.edu.ph',
            'contact_number' : '09794578956',
            'contact_person' : null,
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
            'name' : 'Drew Barrymore',
            'username' : 'drewbarrymore',
            'password' : 'dbarrymore',
            'gender' : 'female',
            'birthday' : '1997-12-01',
            'email' : 'drewbarrymore@up.edu.ph',
            'contact_number' : '09334578967',
            'contact_person' : null,
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
            'name' : 'Adam Sandler',
            'username' : 'adamsandler',
            'password' : 'asandler',
            'gender' : 'male',
            'birthday' : '1998-09-24',
            'email' : 'adamsandler@up.edu.ph',
            'contact_number' : '09454578456',
            'contact_person' : null,
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
            'name' : 'PJ Corona',
            'username' : 'pjcorona',
            'password' : 'pcorona',
            'gender' : 'male',
            'birthday' : '1998-09-24',
            'email' : 'pjcorona@up.edu.ph',
            'contact_number' : '09464578978',
            'contact_person' : null,
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
            'name' : 'Lawrence Carandang',
            'username' : 'lawrencecarandang',
            'password' : 'lcarandang',
            'gender' : 'male',
            'birthday' : '1998-08-25',
            'email' : 'lcarandang@up.edu.ph',
            'contact_number' : '09894578924',
            'contact_person' : null,
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
            'name' : 'Onyl Maitim',
            'username' : 'onylmaitim',
            'password' : 'omaitim',
            'gender' : 'male',
            'birthday' : '1999-12-13',
            'email' : 'onylmaitim@up.edu.ph',
            'contact_number' : '09184578978',
            'contact_person' : null,
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
