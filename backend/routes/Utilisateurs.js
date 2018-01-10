var express = require('express');
var router = express.Router();

var user = require('../models/utilisateurs')

router.get('/:id?',function(req,res,next){
    
    if(req.params.id){
    
        user.getuserById(req.params.id,function(err,rows){
    
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
             "code":200,
             "massage":"good",
             "object": rows
         };
         res.json(reponse);
     }
     });
    }
    else{
    
        user.getAllUser(function(err,rows){
    
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
            "code":200,
            "massage":"good",
            "object": rows
        };
        res.json(reponse);
     }
    
    });
    }
    });

    router.post('/login/',function(req,res,next) {
        user.getUserByLogin(req.body,function(err,rows){
            
            if(err)
             {
                reponse = {
                    "code":300,
                    "massage":"Bad",
                    "request": JSON.stringify(req),
                    "object": err
                };
                res.json(reponse);
             }
             else if(rows.length > 0){
                 reponse = {
                     "code":200,
                     "massage":"good",
                     "request": JSON.stringify(req.body),
                     "object": rows
                 };
                 res.statusCode = 200;
                 res.json(reponse);
             }else{
                reponse = {
                    "code":300,
                    "massage":"User Not exist"
                };
                res.statusCode = 200;
                res.json(reponse);
             }
             });
    });


    router.get('/login/:username.:password',function(req,res,next) {
        user.getUserByLogin(req.body,function(err,rows){
            
            if(err)
             {
                reponse = {
                    "code10":300,
                    "massage":"Bad",
                    "request": JSON.stringify(req),
                    "object": err
                };
                res.json(reponse);
             }
             else if(rows.length > 0){
                reponse = {
                    "code":200,
                    "massage":"good",
                    "request": JSON.stringify(req.body),
                    "object": rows
                };
                res.statusCode = 200;
                res.json(reponse);
            }else{
               reponse = {
                   "code":300,
                   "massage":"User Not exist"
               };
               res.statusCode = 200;
               res.json(reponse);
            }
            });
    });

    router.post('/',function(req,res,next){
        
        user.AddNewUser(req.body,function(err,count){
         if(err)
         {
            reponse = {
                "code11":300,
                "massage":"Bad",
                "object": err
            };
            res.json(reponse);
         }
         else{
            reponse = {
                "code":200,
                "massage":"good"
              
            };
            res.json(reponse);
         }
         });
        });
        
        
        router.delete('/:id',function(req,res,next){

        user.deleteUser(req.params.id,function(err,count){
        
        if(err)
         {
            reponse = {
                "code":300,
                "massage":"good",
                "object": err
            };
            res.json(reponse);
         }
         else
         {
          reponse = {
                     "code":200,
                     "massage":"good",
                     "object": count
                 };
                 res.json(reponse);
         }
        
        });
        });
        
        
        router.put('/:id',function(req,res,next){
        user.EditUser(req.params.id,req.body,function(err,rows){
        
        if(err)
         {
            reponse = {
                "code":300,
                "massage":"good",
                "object": err
            };
            res.json(reponse);
         }
         else
         {
            reponse = {
                "code":200,
                "massage":"good",
                "object": rows
            };
            res.json(reponse);
         }
         });
        });

    module.exports=router;