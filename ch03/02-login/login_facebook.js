var casper = require('casper').create({verbose: true, logLevel:'debug'});

var url = "https://www.facebook.com";
var id = "hazxz@naver.com";
var password = "Dlttmxl12#$";

casper.start();

casper.open(url);

casper.then(function() {
	casper.fillSelectors("#login_form",
		{
			'input[name="email"]' : id,
			'input[name="pass"]' : password
		}, true);
});

casper.then(function() {
	var getName = function() {
		return document.querySelector("#blueBarDOMInspector a._2s25 > span").innerText
	};
	console.log("이름 : " + this.evaluate(getName));
});

casper.run();
