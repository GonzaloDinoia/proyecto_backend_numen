const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');

//2
const indexRouter = require('./routes/index');
const vehiculosRouter = require('./routes/vehiculos');
const userRouter = require ('./routes/user')



const app = express();

const {connect}=require('./db/db')

//configuraciones
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    secret:"proyectobackend123456",
    resave:true,
    saveUninitialized:true
}))

//1
app.use('/', indexRouter);
app.use('/vehiculos', vehiculosRouter);
app.use('/user', userRouter);



connect()
module.exports = app;
