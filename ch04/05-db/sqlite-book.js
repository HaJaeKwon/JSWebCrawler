var DB_PATH = __dirname + "/jpub.sqlite";
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('jpub.sqlite');


var BASE_URL = "http://jpub.tistory.com/category/" + encodeURIComponent("제이펍의 도서");
var client = require('cheerio-httpcli');
var fs = require('fs');
var urlType = require('url');

var booklist = [];
var PAGE_NUM = 6;

scrape(1);

function scrape(page) {
	if ( page > PAGE_NUM ) {
		//print();
		dbinsert();
		return;
	}
	var VISIT_URL = BASE_URL + "?page=" + page;

	client.fetch(VISIT_URL, function(err, $, res) {
		if(err) { console.log("DL error"); return; }

		var tr = $("#searchList > ol > li > span.list > a");

		if(!tr) {
			console.log("페이지 형식 에러"); return;
		}

		for (var i = 0; i < tr.length; i++) {
			var book = tr.eq(i).text();
			booklist.push(book);
		}
		scrape(page + 1);
	});
}

function print() {
	
	for( var i = 0; i < booklist.length; i++) {
		console.log(booklist[i]);
	}
}

function dbinsert() {
	db.serialize(function() {
		db.run("CREATE TABLE IF NOT EXISTS books (" +
			"id INTEGER PRIMARY KEY, " +
			"token TEXT)");
		
		var ins_stmt = db.prepare(
			'INSERT INTO books (token)' +
			'VALUES(?)');
		
		booklist.forEach(function(value, index, array) {
			var words = value.split(" ");
				
			for(var i in words) {
				//console.log(words[i]);
				ins_stmt.run(words[i]);
			}
		});
		

		ins_stmt.finalize();

		console.log("집계 결과");
		
		db.each("SELECT token, COUNT(token) as cnt " +
			"FROM books GROUP BY token having cnt > 3 " +
			"ORDER BY cnt DESC",
			function(err, row) {
				if(err) { console.log(err); return; }
				console.log(row.cnt + " 회 : " + row.token);
			}
		);
		/*
		db.each("SELECT * FROM books", function(err, row) {
			console.log(row);
		});
		*/
	});
	db.close();
};

	
