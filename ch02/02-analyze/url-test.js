var urlType = require('url');

var base = "http://kujirahand.com/url/test/index.html";
var u1 = urlType.resolve(base, 'a.html');
console.log("u1 = " + u1);

var u2 = urlType.resolve(base, '../b.html');
console.log("u2 = " + u2);
