var str = "price: 100 won";

var txt = str.replace(/\d+/, function(v) {
	v = parseInt(v);
	return Math.ceil(1.08 * v); 
});

console.log(txt);

