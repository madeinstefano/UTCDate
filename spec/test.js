const should = require('chai').should();
const expect = require('chai').expect;

const utcdate = require('../utcdate');


describe('Utcdate Test', function () {
  
  it("Should return time now in epoch", function () {
    var now = utcdate.now( );
    var expect = new Date().getTime( );
    now.should.eql(expect);
  });
  
  it("Should return time now in epoch with the timepart", function () {
    var today = utcdate.today( );
    
    var reference = new Date();
    var hours = reference.getUTCHours( ) * 60 * 60 * 1000;
    var minutes = reference.getUTCMinutes( ) * 60 * 1000; 
    var seconds = reference.getUTCSeconds( ) * 1000; 
    var milliseconds = reference.getUTCMilliseconds( ); 
    
    today.should.eql(reference.getTime( ) - hours - minutes - seconds - milliseconds);
  });
});
