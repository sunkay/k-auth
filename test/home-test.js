var request = require("supertest");
var should = require("should");

// This agent refers to PORT where program is runninng.

//var server = supertest.agent("http://localhost:3090");

// UNIT test begin

describe("SAMPLE unit test",function(){
  var server;

  beforeEach(function(){
    server = require('../server');
  });

  afterEach(function(){
    server.close();
  });


  // #1 should return home page

  it("should return home page",function(done){

    // calling home page api
    request(server)
      .get("/")
      .expect("Content-type",/json/)
      .expect(401) // THis is HTTP response
      .end(function(err,res){
        // HTTP status should be 200
        res.status.should.equal(401);
        done();
    });
  });

});
