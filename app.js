var express = require('express');
var app = express();
var handlers = require('./handlers');
var path = require('path');

app.get('/search', function (req, res) {
    console.log('[search request] get!');
    handlers.searchReqHandler(req.query.q, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            res.set('Content-Type', 'text/plain');
            result = result.map(function (o) {
                return o.src.replace(/_s.gif$/, '.gif');
            });
            console.log("Sending: ", result);
            res.send(JSON.stringify(result));
        }
    });
});

app.get('/js/bundle.js', function (req, res) {
    res.sendFile(path.join(__dirname,'js/bundle.js'));
});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname,'index.html'));
});

app.listen(3000);