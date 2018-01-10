var db=require('../dbconnection'); //reference of dbconnection.js


var user = {
    // login 

    getUserByLogin : function(param, callback){
        var query = "SELECT * FROM utilisateurs WHERE login = ? AND password = ?";
        var table= [param.username,param.password];
        console.log( "Query params : " +param.username+" password:"+param.password + " Parameters :"+ JSON.stringify(param))
        return db.query(query,table,callback);
    },
    // add user 
    AddNewUser : function(user, callback){
        var query = "INSERT INTO utilisateurs VALUES(?,?,?,?,?,?,?)";
        var table= [user.nom,user.telephone,user.address,user.login,user.password,user.email,user.role_id];
        return db.query(query,table,callback);
    },

    // liste user 
    getAllUser: function(callback){
        var query = "SELECT * FROM utilisateurs";
        return db.query(query,callback);
    },


    //get user by Id 
    getuserById :function(id, callback){
        var query = "SELECT * FROM utilisateurs WHERE id = ? ";
        var table = [id];
        return db.query(query,table, callback);
    },
    // delete user 
    deleteUser : function(callback){
        var query = "DELETE FROM utilisateurs WHERE id = ?";
        var table= [id];
        return db.query(query,table,callback);
    },

    // edit user 
    EditUser : function(id, user, callback){
        var query = "UPDATE `utilisateurs` SET nom= ?, telephone =? , address =?,login= ?, password = ? , email = ?, role_id = ? WHERE  id = ?";
        var table= [user.nom,user.telephone,user.address,user.login,user.password,user.email,user.role_id, id];
        return db.query(query,table,callback);
    },

    // edit pass word 
    
    EditPassWd : function(callback){
        var query = "SELECT * FROM stock WHERE stock_id = ?";
        var table= [id];
    }
};
module.exports=user;