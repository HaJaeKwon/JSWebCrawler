var fs = require('fs');
var iconv = require('iconv-lite');
var jschardet = require('jschardet');

var buf = fs.readFileSync('sample-unknown.txt');

var det = jschardet.detect(buf);
console.log(det);

var buf2 = iconv.decode(buf, 'utf-8');
var txt = buf2.toString();
console.log(txt);
