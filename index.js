function toInt(ipAddress) {
  var pow = 3;
  var result = 0;

  ipAddress.split('.').forEach(function(octet) {
    result += parseInt(octet) * (Math.pow(256, pow--));
  });
  return result;
}

function fromInt(integer) {
  var remainder = integer % 256;
  for (var i = 3; i > 0; i--) { 
    integer = Math.floor(integer / 256);
    remainder = integer % 256 + '.' + remainder;
  }
  return remainder;
}

function isDotQuadInRange(ip, intIpStart, intIpEnd) {
  ipInt = toInt(ip);

  return (ipInt >= intIpStart && ipInt <= intIpEnd);
}

function getSizeForDotQuadRange(ipStart, ipEnd) {
  var intStart = toInt(ipStart);
  var intEnd = toInt(ipEnd);

  return (intEnd - intStart) + 1;
}

function getSizeForPartialDotQuad(ip) {
  var octets = ip.split('.');
  if (octets.length === 2) {
    return getSizeForDotQuadRange(ip + '0.0.1', ip + '255.255.255');
  } else if (octets.length === 4) {
    return getSizeForDotQuadRange(ip + '1', ip + '255');
  } else {
    return getSizeForDotQuadRange(ip + '0.1', ip + '255.255');
  }
}

module.exports = {
  toInt: toInt,
  fromInt: fromInt,
  getSizeForDotQuadRange: getSizeForDotQuadRange,
  isDotQuadInRange: isDotQuadInRange,
  getSizeForPartialDotQuad: getSizeForPartialDotQuad
};