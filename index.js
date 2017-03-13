var express = require('express');
var path = require('path');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.set('views', __dirname + '/static');
app.set('view engine', 'pug');

app.use(express.static(__dirname + '/static'));

app.get('/', function(request, response) {
    response.render('index');
});

app.get('/ru', function(request, response) {
    response.render('ru/index');
});

app.get('/:page', function(request, response) {
    response.render(request.params.page);
});

app.get('/ru/:page', function(request, response) {
    response.render('ru/' + request.params.page);
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
