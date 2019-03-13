const express = require('express');
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient

const app = express();

const db = require('./config/keys').mongoURI
MongoClient.connect(db, { useNewUrlParser: true })
.then(() => {
    console.log('masuk')
}).catch((err) => {
    console.log(err)
});

