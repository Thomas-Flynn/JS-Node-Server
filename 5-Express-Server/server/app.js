require('dotenv').config();
var express = require('express');
var app = express();
var test = require('./controllers/testcontroller')
var user = require('./controllers/usercontroller')
var sequelize = require('./db');
var bodyParser = require('body-parser');

sequelize.sync(); // tip: pass in {force: true} for resetting tables

app.use(bodyParser.json());
app.use(require('./middleware/headers'));
app.use('/test', test);
app.use('/api/user', user);

app.listen(3000,() => {
    console.log('App is listening on port 3000');
});