var client = require('cheerio-httpcli');
var urlType = require('url');

var url = "http://jpub.tistory.com";
var params = {};

client.fetch(url, params, function(err, $, res) {
	if(err) {console.log("error"); return;}
	// 링크를 추출하여 표시
	$("a").each(function(idx) {
		var text = $(this).text();
		var href = $(this).attr('href');
		if(!href) return;
		//console.log(text+":"+href);
		var href2 = urlType.resolve(url, href);
		console.log(text + ": " + href);
		console.log(" => " + href2 + "\n");
	});
});
