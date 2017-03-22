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
                done();
            });
        });
    });
});