var fs = require('fs');
var Iconv = require('iconv-lite');

var buf = fs.readFileSync('sample-euckr.txt');

var buf2 = Iconv.decode(buf, 'UTF-8');
var txt = buf2.toString();
console.log(txt);

fs.writeFileSync('test.txt', txt, 'utf-8');
