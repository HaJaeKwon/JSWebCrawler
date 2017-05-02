var client = require('cheerio-httpcli');

//var iconv = require('iconv-lite');

var url = "http://jpub.tistory.com";
var param = {};

client.fetch(url, param, function(err, $, res) {
	if(err) { console.log("Error : ", err); return;}

	//iconv.extendNodeEncodings();
	//var strContents = new Buffer($.html);
	//console.log(strContents);

	var body = $.html();
	console.log(body);
});
