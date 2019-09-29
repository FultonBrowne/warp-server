'use strict';
//HTTP config
var http = require('http');
//Port
var port = process.env.PORT || 1337;
//url value
var url;
let string = "hi"
let bool = true
let int = 0


http.createServer(function (req, res) {
    //content type
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    //parse input
    res.end(string);
    //fun loop
    while (bool) {
        res.end(string);
        
    }
}).listen(port);
