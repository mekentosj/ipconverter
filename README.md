## Ipconverter

Ipconverter easily converts IP addresses to longs and viceversa. 

It also helps to get the size of a range of IPs and checks whether an IP address is in a range.

### Examples

This converts a dotquad into a long:

```js
var ip = '192.168.0.1';
assert.equal(ipconverter.toInt(ip), '3232235521');
```

This converts a long into a dotquad:

```js
var integer = '3232235521';
assert.equal(ipconverter.fromInt(integer), '192.168.0.1');
```

This checks the size of a range:

```js
var ipStart = '192.168.0.1';
var ipEnd = '192.168.0.255';
assert.equal(ipconverter.getSizeForDotQuadRange(ipStart, ipEnd), 255);
```

It handles partial IP addresses:

```js
var ip1 = '192.168.0.'; // 192.168.0.1 to 192.168.0.255
var ip2 = '192.168.'; // 192.168.0.1 to 192.168.255.255
var ip3 = '192.'; // 192.0.0.1 to 192.255.255.255

assert.equal(ipconverter.getSizeForPartialDotQuad(ip1), 255);
assert.equal(ipconverter.getSizeForPartialDotQuad(ip2), 65535);
assert.equal(ipconverter.getSizeForPartialDotQuad(ip3), 16777215);
```

This checks if an IP is within a range of two IP addresses:

```js
var ip = '192.168.0.2';
var intIpStart = ipconverter.toInt('192.168.0.1');
var intIpEnd = ipconverter.toInt('192.168.0.255');
assert.equal(ipconverter.isDotQuadInRange(ip, intIpStart, intIpEnd), true);
```
