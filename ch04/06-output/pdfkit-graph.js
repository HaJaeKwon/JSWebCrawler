var PDFDocument = require('pdfkit');
var fs = require('fs');

var data = [
	{ label:'korean', value:76 },
	{ label:'math', value:48 },
	{ label:'science', value:89 },
	{ label:'society', value:68 },
	{ label:'music', value:55 },
	{ label:'english', value:73 },
	{ label:'technology', value:92 },
	{ label:'art', value:58 },
	{ label:'choice', value:79 }
];

var doc = new PDFDocument();
var page_w = doc.page.width;
var page_h = doc.page.height;

doc.pipe(fs.createWriteStream('output-graph.pdf'));

doc.fontSize(30)
	.text('GRADE GRAPH', 20, 20);

var margin = 20;
var g_w = page_w - margin * 2 - 50;
var g_x = margin + 50;
var y = 80;
var wpx = g_w / 100;

for(var i=0; i<data.length; i++) {
	var value = data[i].value;
	var label = data[i].label;
	doc.save()
		.rect(g_x, y, wpx * value, 20)
		.fill( i%2 == 0 ? 'blue':'red');
	doc.fontSize(10)
		.fillColor('black')
		.text(label, 30,y + 5)
		.text(value, g_x + 5, y+5);
	y += 20 + 5;
}

doc.end();
