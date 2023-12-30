const express = require('express');
const app = express();
app.use(express.urlencoded({extended: true}));
const cookieParser = require('cookie-parser');
app.use(cookieParser());

const hbs = require('hbs');
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

const path = require('path');
app.use(express.static(path.join(__dirname,"./public/")));


const chalk = require('chalk');
const debug = require('debug')('app');

const { requireLogin } = require('./Middleware/Middleware');
const dashboard = require('./routers/genaral');
const userOne = require('./routers/userOne');
const register = require('./routers/register');
const youporfile = require('./routers/youporfile');

app.use('/',dashboard);
app.use('/User',userOne);
app.use('/Register',register);
app.use('/Youporfile',requireLogin,youporfile);


app.listen(5000, ()=>{
    debug('On port: '+chalk.blue('5000'));
    
}) 