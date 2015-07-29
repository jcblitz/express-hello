// test/routes/hello-test.js

// create server
var express = require('express'),
    should = require('should');
require('express-test');

var app = express.createServer();

// require the route you're going to test
require('./routes/hello')(app);

// test the body
app.request().get('/hello').end()
.verify(function(res) {
  res.body.should.equal('hello');
});

// set sinon expectations on the response mock
app.request().get('/hello').end(function() {
  res.expects('send').once();
}).verify();