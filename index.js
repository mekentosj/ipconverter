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
    integer = Math.floor(integer/256);
    remainder = integer % 256 + '.' + remainder;
  }
  return remainder;
}

function getSizeForDotQuadRange(ipStart, ipEnd) {
  var intStart = toInt(ipStart);
  var intEnd = toInt(ipEnd);

  return (intEnd - intStart) + 1;
}

module.exports = {
  toInt: toInt,
  fromInt: fromInt,
  getSizeForDotQuadRange: getSizeForDotQuadRange
};