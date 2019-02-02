var socket = io.connect('http://localhost:4000');

// Query DOM

var message = document.getElementById('message');
	handle = document.getElementById('handle'),
	btn = document.getElementById('send'),
	output = document.getElementById('output'),
	feedback = document.getElementById('feedback');


// Emit events

btn.addEventListener('click', function(){

	socket.emit('chat', {

		message: message.value,
		handle: handle.value
	});
});

// message.addEventListener('keypress', function(e){

// 	if (e.key == 'Enter') {


// 		socket.emit('chat', {

// 		message: message.value,
// 		handle: handle.value
// 	});

// 	}

	
// });

// adding the 'Talha is typing' message and braodcasting it to other sockets
message.addEventListener('keypress', function(){

	socket.emit('typing', handle.value);

});

// Displaying the messages to the chat-window / Listening to events

socket.on('chat', function(data){

	feedback.innerHTML = "";
	output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';

});

// displaying the typing message to the other sockets

socket.on('typing', function(data){

	feedback.innerHTML = '<p><em>' + data + ' is typing a message...</em></p>';

});