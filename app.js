var express = require('express');
var bodyParser = require('body-parser');
var routes = require('./routes/index');
var mailAPI = require('./routes/mailAPI');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/', routes);
app.use('/mailAPI', mailAPI);
app.use(express.static(__dirname + '/public')); 

app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    res.sendFile("webpages/error404.html", { root: "public" }); 
});

app.listen(process.env.PORT, () => {
    console.log("Server started");
});

