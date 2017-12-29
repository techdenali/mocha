var expect  = require('chai').expect;
var request = require('request');

it('Main page content', function(done) {
    request('http://localhost:8000/sree' , function(error, response, body) {
        expect(body).to.equal('hello world welcomes sree');
        done();
    });
});