var express = require('express')
var app = express()

var myLogger = function (req, res, next) {
    console.log('LOGGED')
    console.log(req);
    next()
}

var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
app.use(allowCrossDomain);
//some other code
app.use(myLogger)

app.get('/', function (req, res) {
    res.send('Hello World!');
})

app.get('/list', function (req, res) {

    var responseList = {
        symbols: [],
    }
    var symbol = {};
    for (var i = 1; i <= 1000000; i++) {
        symbol = {};
        symbol.id = i;
        symbol.currency = 'Record :::  ' + i;
        responseList.symbols.push(symbol);
    }


    res.send(responseList);
})

app.listen(3030);