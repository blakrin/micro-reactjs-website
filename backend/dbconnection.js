var mysql=require('mysql');
var connection=mysql.createPool({
host:'localhost',
user:'react',
password:'1234',
database:'microproject',
port : 3306, //port mysql
multipleStatements: true

});

module.exports=connection;