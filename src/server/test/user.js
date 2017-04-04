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

});
