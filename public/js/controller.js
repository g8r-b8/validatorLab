var express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const{check, validationResult}=require('express-validator');
var router = express.Router();
//var mw = require('./middleware.js')

const urlencoded = bodyParser.urlencoded({extended:false});

router.use(bodyParser.json());
router.use(urlencoded);
router.use(express.static(__dirname = './public/'));

//router.use(mw.middleware1)

function middleware1(req, res, next) { 
    //req.requestTime = Date.now(); 
    new_name=(req.body.name="-oh")
    return new_name
    next() 
}

router.get('/api/customers', (req, res, next)=>{

    const customers = [
        {id:1, user:"jquils5"},
        {id:2, user:"jquils5"},
        {id:3, user:"jquils5"}
    ]

    res.json(customers);
})

router.get('/', (req,res, next) => {

    res.sendFile('index.html', { root: __dirname });
    
    //next();
});

router.get('/home', middleware1,(req,res, next) => {

    console.log("mw line")
    
    
    //next();
});


router.post('/formData', [
    //pass in validations
    check("name").not().isEmpty()
], middleware1, function (req,res){

    // gonna do our validation so comment out..
    req.body.name= middleware1;
    //req.body.name = mw.middleware1();
    console.log("working... "+req.body.name);
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({
            errors:errors.array()
        })
    }
    res.status(202).json({
        success:'ok'
        
    })
    
});

module.exports = router;
