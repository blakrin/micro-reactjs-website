var express = require('express');
var router = express.Router();

var produit = require('../models/produits');


router.get('/:id?',function(req,res,next){
    
    produit.getProduitById(req.params.id,function(err,rows){
        
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
    });

router.get('/stockid/:id?', function(req,res,next){
    produit.getProduitsByStockId(req.params.id,function(err,rows){
        
        if(err)
         {
            reponse = {
                "code":300,
                "massage":"Bad",
                "object": err
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
    });


    router.post('/',function(req,res,next){
        
        produit.retireProduit(req.body,function(err,count){
         if(err)
         {
            reponse = {
                "code":300,
                "massage":"Bad",
                "object": err
            };
            res.json(reponse);
         }
         else{
            reponse = {
                "code":0,
                "massage":"good",
                "object": count
            };
            res.json(reponse);//or return count for 1 &amp;amp;amp; 0
         }
         });
        });
        

        router.post('/',function(req,res,next){
            
            produit.postProduit(req.body,function(err,count){
             if(err)
             {
                reponse = {
                    "code":300,
                    "massage":"Bad",
                    "object": err
                };
                res.json(reponse);
             }
             else{
                reponse = {
                    "code":0,
                    "massage":"good",
                    "object": count
                };
                res.json(reponse);//or return count for 1 &amp;amp;amp; 0
             }
             });
            });
        
        
        router.delete('/:id',function(req,res,next){
        
            produit.deleteProduit(req.params.id,function(err,count){
        
        if(err)
         {
            reponse = {
                "code":300,
                "massage":"Bad",
                "object": err
            };
            res.json(reponse);
         }
         else
         {
            reponse = {
                "code":0,
                "massage":"good",
                "object": count
            };
            res.json(reponse);
         }
        
        });
        });
        
        
        router.put('/:id',function(req,res,next){
        
        Task.updateTask(req.params.id,req.body,function(err,rows){
        
        if(err)
         {
         res.json(err);
         }
         else
         {
         res.json(rows);
         }
         });
        });


module.exports=router;