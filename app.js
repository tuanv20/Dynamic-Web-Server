const http = require('http');
const fs = require('fs');

const server = http.createServer(function(req, res){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write("Hello World");
    res.end();
    }
)

const port = 8080;

server.listen(port, function(){
    console.log("Server Running on Port: " + port);
})