var assert = require('assert');
var ipconverter = require('./../');

describe('ipconverter', function() {
  it ('should convert an IP address to an integer', function() {
    var ip = '192.168.0.1';
    assert.equal(ipconverter.toInt(ip), '3232235521');
  });

  it ('should convert an integer to an IP address', function() {
    var integer = '3232235521';
    assert.equal(ipconverter.fromInt(integer), '192.168.0.1');
  });

  it('should get the size of a range of IPs', function() {
    var ipStart = '192.168.0.1';
    var ipEnd = '192.168.0.255';
    assert.equal(ipconverter.getSizeForDotQuadRange(ipStart, ipEnd), 255);
  });

  it('should handle partial IP addresses', function() {
    var ip1 = '192.168.0.';
    var ip2 = '192.168.';
    var ip3 = '192.';

    assert.equal(ipconverter.getSizeForPartialDotQuad(ip1), 255);
    assert.equal(ipconverter.getSizeForPartialDotQuad(ip2), 65535);
    assert.equal(ipconverter.getSizeForPartialDotQuad(ip3), 16777215);
  });

  it('should calculate if an IP is in range', function() {
    var ip = '192.168.0.2';
    var intIpStart = ipconverter.toInt('192.168.0.1');
    var intIpEnd = ipconverter.toInt('192.168.0.255');
    assert.equal(ipconverter.isDotQuadInRange(ip, intIpStart, intIpEnd), true);
  })
});