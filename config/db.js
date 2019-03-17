var mysql = require('mysql')

var connection = mysql.createConnection({
    host : 'banano.localhost',
    user : 'root',
    password : '',
    database : banano_db
})

connection.connect(function(err){
    if (err) {
        console.log(err)
    }
})

module.exports = connection;