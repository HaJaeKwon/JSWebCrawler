var iconv = require('iconv-lite');
var fs = require('fs');

var str = "안녕하세요";
var fname = "iconv-lite-test-euckr.txt";

var buf = iconv.encode(str, "utf-8");

fs.writeFileSync(fname, buf, "binary");

var bin = fs.readFileSync(fname, "binary");

var txt = iconv.decode(bin, "utf-8");
console.log(txt);
