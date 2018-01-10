var express = require('express');
var router = express.Router();
var stock = require('../models/stock');

router.get('/:id?',function(req,res,next){
    
    if(req.params.id){
    
        stock.getStockById(req.params.id,function(err,rows){
    
    if(err)
     {
        reponse = {
            "code":300,
            "massage":"Bad",
            "object": rows
        };
        res.json(reponse);
     }
     else{
         reponse = {
             "code":0,
             "massage":"good",
             "object": rows
         };
         res.json(reponse);
     }
     });
    }
    else{
    
        stock.getAllStock(function(err,rows){
    
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
    });
    
    module.exports=router;