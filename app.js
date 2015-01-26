
//Core express modules
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


//Django style templating engine
var nunjucks = require('nunjucks');

//url management
var shrinkroute = require('shrinkroute');
var urlpatterns = require('./urlpatterns');


//load config file
var config = require('./config')();

//create express app
var app = express();

//variables set up
app.set('STATIC_PATH', config.STATIC_PATH);

app.set('port', config.port);

// view engine setup
app.set('views', path.join(__dirname, 'views'));

var nunjucksEnv = nunjucks.configure(app.get('views'), {
	autoescape: false, 
	express: app
});
//helper for view engine
app.locals.staticURL = function(str){
    return app.get('STATIC_PATH') + str;
};

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));
//allows custom path for static content
app.use(app.get('STATIC_PATH'),express.static(path.join(__dirname, 'public')));

var shrinkr = shrinkroute( app, urlpatterns({}) );
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error.html', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error.html', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
