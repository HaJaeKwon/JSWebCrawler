var casper = require('casper').create({verbose: true, logLevel:'debug'});

var url = "http://naver.com";
var id = "hazxz";
var password = "Dlttmxl12#$";

casper.start();

casper.open(url);

casper.then(function() {
	casper.fillSelectors("#frmNIDLogin",
		{
			'input[name="id"]' : id,
			'input[name="pw"]' : password
		}, true);
});

/*
casper.then(function() {
	casper.sendKeys('#frmNIDLogin > fieldset > div#htmlarea > div.input_box > input#id', id);
	casper.sendKeys('#frmNIDLogin > fieldset > div#htmlarea > div.input_box > input#pw', password);
});
*/
casper.then(function() {
	var path = "span.btn_login > input";
	if(casper.exists(path)) {
		casper.mouseEvent('click', path);
	}
	casper.wait(3000);
});

casper.then(function() {
	var getMail = function() {
		return document.querySelector("#mail_count_profile > span").innerText
	};
	console.log("새 메일 수 : " + this.evaluate(getMail));
});

/*
casper.then(function() {
	var getApiCall = function() {
		return document.querySelector('.api > div.graph-wrap > h4:nth-child(2) > small').innerText};
	console.log("총 API 요청 : " + this.evaluate(getApiCall));
});
*/
casper.then(function() {
	var getNote = function() {
		return document.querySelector("#note_count_profile > span").innerText
	};
	console.log("새 쪽지 수 : " + this.evaluate(getNote));
});


casper.then(function() {
	var getRank = function() {
		return document.querySelector("#realrank > li > a > span:nth-child(1)").innerText;
	};
	console.log("검색어 1등 : " + this.evaluate(getRank));
});

casper.run();
