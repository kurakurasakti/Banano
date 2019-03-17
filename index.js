const express = require('express');
var bodyParser = require('body-parser')
var cors = require('cors')
var port = 2001

const app = express();

app.use(bodyParser.json())
var cors = require('cors')

app.get('/', (req,res) => {
    res.send({nama : 'Fikri'})
} )

app.get('/produk' , (req,res) => {
    if(nama == undefined){
        nama = ''
    }
    var nama =  req.query.nama
    var sql = `select * from product where nama like '%${nama}%'`;
    db.query(sql, (err,result)=> {
        if(err) throw err;
        console.log(result);
        res.send(result);
    })
})


app.listen(port , () => console.log('API sedang Jalan di Port ' + port) )