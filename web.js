var fs = require( 'fs' );
var express = require('express');

var buffer  = new Buffer(50);
buffer.write(fs.readFileSync('index.html', 'utf-8'));
var result = buffer.toString("utf-8");
console.log(result);



var app = express.createServer(express.logger());
app.get('/', function(request, response) {
//  response.send('Hello World 2!');
response.send(result);
response.end();
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

//fs.readFileSync(filename, [options])
//buf.toString([encoding], [start], [end])
