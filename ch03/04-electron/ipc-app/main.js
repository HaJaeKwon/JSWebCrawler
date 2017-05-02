var electron = require('electron');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;
var ipc = electron.ipcMain;

var mainWindow = null;
app.on('ready', function() {
	mainWindow = new BrowserWindow({width:800, height:600});
	mainWindow.loadURL('file://' + __dirname + '/index.html');
	mainWindow.on('closed', function() {
		mainWindow = null;
	});
});

ipc.on('mul-sync', function(event, arg) {
	console.log(arg);
	event.returnValue = arg.a * arg.b;
});

ipc.on('mul-async', function(event, arg) {
	console.log(arg);
	var result = arg.a * arg.b;
	event.sender.send('mul-async-reply', result);
});

ipc.on('send-innerText', function(event, arg) {
	console.log(arg);
})