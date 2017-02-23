// HTTPS
var https = require('https');
// read in the private key and certificate
var pk = fs.readFileSync('/etc/letsencrypt/live/wss.cestechservices.net/privkey.pem');
var pc = fs.readFileSync('/etc/letsencrypt/live/wss.cestechservices.net/fullchain.pem');
var opts = { key: pk, cert: pc };
// create the secure server
var serv = https.createServer(opts, function(req, res) {
  console.log(req);
  res.writeHead(200);
  res.end(" Hello World !");
});
// listen on port 1443
serv.listen(1443, 'wss.cestechservices.net');
