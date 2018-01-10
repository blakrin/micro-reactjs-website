var db=require('../dbconnection'); //reference of dbconnection.js


var produits = {

    //listing des produits d'un stock
    getProduitsByStockId:function(id,callback){
        var query = "SELECT * FROM produits WHERE stock_id = ?";
        var table= [id];
        return db.query(query,table,callback);
    },

    //recuperer les informations sur un produit
    getProduitById :function(id,callback){
        var query = "SELECT * FROM produits WHERE id = ?";
        var table= [id];
        return db.query(query,table,callback);
    },

    // reduire la quantite d'un produit 
   retireProduit :function(params,callback){
        var query = "UPDATE produits SET produit_qte=? WHERE id = ?; INSERT INTO retirer values(?,?,?)";
        var newqte = params.produit.produit_qte-params.quantite;
        var d = new Date(); 
        var date = d.getDate+"/"+d.getMonth+"/"+d.getFullYear;
        var table= [newqte,params.produit.id,params.user.id_utilisateur,params.produit.id,date];
       return db.query(query,table,callback);
   },


//ajout d'un produit
   postProduit : function(produit,callback){
    var query = "INSIRE INTO produits values(?,?,?,?,?)";
    var table= [produit.produit_name,produit.produit_qte,produit.produit_seuil,produit.produit_designation,produit.stock_id];
    return db.query(query,table,callback);
   },


// delete produits 
   deleteProduit: function(id,callback){
    var query ="DELETE FROM produits WHERE id = ?";
    var table = [id];
    return db.query(query,table,callback);
   }

// edit project.    
};
module.exports=produits;