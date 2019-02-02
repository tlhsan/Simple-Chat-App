var express = require('express')
var socket = require('socket.io')
var app = express() //calling an instance of the express app like java

var server = app.listen(4000, function(){

	console.log("Listening to your requests maite");

});

// to use static files in nodejs, we need to create a folder called public the .use the file

// to call the server to diplay its function

app.use(express.static('public'));

// Creating socket

var io = socket(server);

io.on('connection', function(socket){

	console.log('socket is connected', socket.id);

	// Handling messages of a socket to emit to all the sockets

	socket.on('chat', function(data){

		io.sockets.emit('chat', data);
	});

	// Handling the broadcasting of the talha is typing message to other sockets 
	socket.on('typing', function(data){

		socket.broadcast.emit('typing', data);
	});
	

});
