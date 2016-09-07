var express = require('express');
var fs = require('fs');
var app = express()
var hl = require('highlight.js');

app.get('/', function(req, res) {
    res.end("Hello World!");
});

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

app.get('/javascript/:id', function(req, res) {
    fileName = 'javascript/' + req.params.id + ".js";
    fs.readFile(fileName, 'utf8', function(err, data) {
        if(err) throw err;
        console.log("OK: " + fileName);
        console.log(data);
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write('<link rel="stylesheet" href="//cdn.jsdelivr.net/highlight.js/9.6.0/styles/default.min.css"><script src="//cdn.jsdelivr.net/highlight.js/9.6.0/highlight.min.js"></script>');
        var highlight = hl.highlightAuto(data)['value'];
        var fixMarkup = hl.fixMarkup(highlight);
        fixMarkup = fixMarkup.replaceAll('\n', '<br>');
        fixMarkup = fixMarkup.replaceAll('\t', '&nbsp;');
        fixMarkup = fixMarkup.replaceAll('    ', '&nbsp;');
        res.write(fixMarkup);
        res.end();
    });
});

app.listen(8080, function() {
    console.log("Example app listening on port 8080!");
});
