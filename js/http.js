var http = require("http");
var s = http.createServer(function(req, res){
  console.log("Got Connection from : " + req.connection.remoteAddress);
  res.writeHead(200);
  setTimeout(function(){
    res.write("This is Response \n");
    res.end("Hello World");
  },5000);

});
s.listen("9999","wss.cestechservices.net");
console.log("Server is listening on port : 9999 ");
