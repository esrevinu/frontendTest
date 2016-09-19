var PORT = 8000;
var http = require('http');
var server = http.createServer(function (req, res) {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write("ABC");
    res.end();
});
server.listen(PORT);
console.log("Server runing at port: " + PORT + ".");