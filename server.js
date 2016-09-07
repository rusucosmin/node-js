var express = require('express');
var fs = require('fs');
var app = express()

app.get('/', function(req, res) {
    res.end("Hello World!");
});

app.get('/javascript/:id', function(req, res) {
    fileName = req.params.id + ".js"; /// foce to string
    fs.readFile(fileName, 'utf8', function(err, data) {
        if(err) throw err;
        console.log("OK: " + fileName);
        console.log(data);
        res.writeHead(200, "{Content-Type: plain/text}");
        res.write(data);
        res.end();
    });
});

app.listen(8080, function() {
    console.log("Example app listening on port 8080!");
});
