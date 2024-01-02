const express = require('express');
const cookieParser = require('cookie-parser');
const debug   = require('debug')('app');
const chalk   = require('chalk');
const hbs     = require('hbs');
const app     = express();
const path    = require('path');

const { requireLogin } = require('./Middleware/Middleware');
const dashboard  = require('./routers/genaral');
const userOne    = require('./routers/userOne');
const register   = require('./routers/register');
const youporfile = require('./routers/youporfile');

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use(cookieParser());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,"./public/")));

app.use('/',dashboard);
app.use('/User',userOne);
app.use('/Register',register);
app.use('/Youporfile',requireLogin,youporfile);
app.use('/Logout',(req,res)=>{
    res.clearCookie("session-id").redirect('/');
})

app.use('/',(req,res)=>{
    res.status(404).render('st404');
})
app.listen(5000, ()=>{
    debug('On port: '+chalk.blue('5000'));  
}) 