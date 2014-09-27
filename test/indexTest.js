//This is a test file for the home page.

//require
var chai = require('chai');
var request = require('supertest');
var app = require('../app.js');

describe("Index", function(){
	it("should exist", function(done){
		request(app)
		.get('/')
		.expect(200, done);
	});
	
});