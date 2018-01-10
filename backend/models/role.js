var db=require('../dbconnection'); //reference of dbconnection.js

//liste des roles 
var role = {
    getAllRole : function(callback){
        var query = "SELECT * FROM role";
        return db.query(query,callback);
    }
};
module.exports=role;