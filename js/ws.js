var WebSocketServer = require('ws').Server,
wss = new WebSocketServer({ port: 8888 });
wss.on('connection', function (connection) {
console.log("User connected");
//console.log(connection);
connection.on('message', function (message) {
console.log("Got message:", message);
});
connection.send('Hello World');
connection.on("close", function close(){
	console.log("User Disconnected !");
});
});
console.log("WebSocket Server listening on : 8888");
