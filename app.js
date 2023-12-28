const express = require('express');
const app = express();
app.use(express.urlencoded({extended: true}));

const hbs = require('hbs');
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

const path = require('path');
app.use(express.static(path.join(__dirname,"./public/")));


const chalk = require('chalk');
const debug = require('debug')('app');

const dashboard = require('./routers/genaral');
const userOne = require('./routers/userOne');
const register = require('./routers/register');

app.use('/',dashboard);
app.use('/User',userOne);
app.use('/Register',register);

app.listen(5000, ()=>{
    debug('On port: '+chalk.blue('5000'));
}) 