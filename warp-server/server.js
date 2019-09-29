'use strict';
//HTTP config
var http = require('http');
//Port
var port = process.env.PORT || 1337;
//url value
var url;


http.createServer(function (req, res) {
    //content type
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    //parse input
    if (res.url.startsWith(h="hi"))res.end(req.url);
}).listen(port);
