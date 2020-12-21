const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const{check, validationResult}=require('express-validator');
const { response } = require('express');
var controller = require('./public/js/controller.js');
// ...


const app = express();
const port = 3000;

app.use('/', controller);





app.listen(port, ()=> {
 
    console.log(`Listening on port ${port}...`);
     
});
