const express = require('express');
const app = express();
app.use(express.urlencoded({extended: true}));
const hbs = require('hbs');
const dashboard = require('./routers/genaral');
const userOne = require('./routers/userOne');
const register = require('./routers/register');
const path = require('path');
app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static(path.join(__dirname,"./public/")));
const chalk = require('chalk');
const debug = require('debug')('app');

app.use('/',dashboard);
app.use('/User',userOne);
app.use('/Register',register);

app.listen(4000, ()=>{
    debug('On port: '+chalk.blue('4000'));
}) 