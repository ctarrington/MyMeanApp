var sprintf = require('sprintf').sprintf
    ,express = require('express')
    , net = require('net')
    , http = require('http')
    , path = require('path')
    , moment = require('moment')
    ;
var routes = {};
routes.index = function(req, res) {
    res.render('./index', { title: 'MyMeanApp' });
};

routes.anyPartial = function (req, res) {
    res.render('./partials/' + req.params.jadeFileName, {});
};

var maxCacheDuration = 1*24*60*60;
var app = express();


app.configure(function(){
    app.set('port', process.env.PORT || 3000);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.cookieParser('your secret here'));
    app.use(express.session());
    app.use(app.router);
    app.use(express.static('./public'), { maxAge: maxCacheDuration });
});

app.configure('development', function(){
    app.use(express.errorHandler());
});


app.get('/', routes.index);
app.get('/partials/:jadeFileName', routes.anyPartial);

var expressServer = http.createServer(app).listen(app.get('port'), function(){
    console.log("Express server listening on port " + app.get('port'));
});