var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session=require('express-session');

var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');
var contactoRouter = require('./routes/contacto');
var proyectoRouter = require('./routes/proyecto');
var visionRouter = require('./routes/vision');
var usersRouter = require('./routes/users');

var authentication=require("../src/middlewares/authentication")

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(session({secret:"una frase",resave:false,saveUninitialized:true,}));
app.use(session({secret:"una frase",resave:false,saveUninitialized:true,}));


app.use('/', indexRouter);
app.use('/login',authentication("usuario"), loginRouter);
app.use('/contacto', contactoRouter);
app.use('/proyectos', proyectoRouter);
app.use('/vision', visionRouter);
app.use('/users',authentication("invitado"), usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
