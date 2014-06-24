var assert = require('assert');
var ipconverter = require('./../');

describe('ipconverter', function() {
  it ('should convert an ip address to an integer', function() {
    var ip = '192.168.0.1';
    assert.equal(ipconverter.toInt(ip), '3232235521');
  });

  it ('should convert an integer to an ip address', function() {
    var integer = '3232235521';
    assert.equal(ipconverter.fromInt(integer), '192.168.0.1');
  });

  it('should get the size of a range of IPs', function() {
    var ipStart = '192.168.0.1';
    var ipEnd = '192.168.0.255';
    assert.equal(ipconverter.getSizeForDotQuadRange(ipStart, ipEnd), 255);
  })
});