// This is the main file here not app.js

const express = require('express');
// using mustache for our view engine
const mustacheExpress = require('mustache-express');
// we're gonna have a form, and we will need a body parser to bring the data from that form - THATS what a body parser does.
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/routes');

// releases the depcreation notices.
mongoose.Promise = global.Promise;

const dbURI = 'mongodb+srv://nyosef:test1234@cluster0.gq7xq.mongodb.net/node-tuts?retryWrites=true&w=majority';

mongoose.connect(dbURI,()=>{
    console.log('succesfuly connected to db');
})


const app = express();
app.use(bodyParser.urlencoded({extended:  true}));

const mustacheExpressInstance = mustacheExpress();
mustacheExpressInstance.cache = null;
app.engine('mustache', mustacheExpressInstance);
// for the view engine - any file with mustache extension - considered a template
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.use('/', routes);



app.listen(3000, ()=>{
    console.log('listening on port 3000');
});