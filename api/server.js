const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const logger = require('morgan');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const pe = require('parse-error');
const passportJWT = require('passport-jwt');
const JwtStrategy = passportJWT.Strategy;
const ExtractJwt = passportJWT.ExtractJwt;
const Sequelize = require('sequelize')
const app = new express();
const port = process.env.port || 3002;
const CONFIG = require('./config/config');
const models = require('./models');
const r1 = require('./routes/routes');


app.use('/r1', r1);
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//passport
app.use(passport.initialize());

//log
console.log("Environment:", CONFIG.app)

//sequolize
models.sequelize.authenticate().then(() => {
  console.log('Connected to SQL database:', CONFIG.db_name);
})
.catch(err => {
  console.error('Unable to connect to SQL database:',CONFIG.db_name);
});
if(CONFIG.app==='dev'){
  models.sequelize.sync();
  // models.sequelize.sync({ force: true });
}
//cors
app.use('/', function(req, res){
	res.statusCode = 200;//send the appropriate status code
	res.json({status:"success", message:"Parcel Pending API", data:{}})
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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


//This is here to handle all the uncaught promise rejections
process.on('unhandledRejection', error => {
  console.error('Uncaught Error', pe(error));
});

module.exports = server;