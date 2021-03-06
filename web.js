//#!/usr/bin/env node
var fs = require( 'fs' );
var express = require('express');

//var indexOut = fs.readFileSync('index.html', 'utf-8');
//var buffer  = new Buffer(50);
//buffer.write(indexOut);
//var result = buffer.toString("utf-8", 0, 27);
//console.log(result);
var buffer = new Buffer(fs.readFileSync('index.html', 'utf-8'), "utf-8");
var result = buffer.toString("utf-8");

var app = express.createServer(express.logger());
app.get('/', function(request, response) {
//  response.send('Hello World 2!');
response.send(result);
response.end();
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});

//fs.readFileSync(filename, [options])
//buf.toString([encoding], [start], [end])
