var express = require('express');
var router = express.Router();

var role = require('../models/role');

router.get('/',function(req,res,next){
    
    role.getAllRole(function(err,rows){
    
    if(err)
     {

        reponse = {
            "code":300,
            "massage":"Bad",
            "object": rows
        };
        res.json(reponse);
     }
     else
     {
        reponse = {
            "code":0,
            "massage":"good",
            "object": rows
        };
        res.json(reponse);
     }
    
    });
    }
);

module.exports=router;
    