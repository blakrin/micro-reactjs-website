var db=require('../dbconnection'); //reference of dbconnection.js


var stock = {

    getStockById : function(id,callback){
        var query = "SELECT * FROM stock WHERE stock_id = ?";
        var table= [id];
        return db.query(query,table,callback);
    },

    
   getAllStock : function(callback){
    var query = "SELECT * FROM stock";
    return db.query(query,callback);
   }
};
module.exports=stock;