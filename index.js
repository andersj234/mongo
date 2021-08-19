const express =require("express");
const app = express();
const mongodb = require("mongodb");
require("dotenv").config() //esto esta mal y no se porque
const MongoClient = mongodb.MongoClient;

let db;
//no muestres nunca esto porque asi ya tienen tu contraseña
MongoClient.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true }, function(err,client){
    err
    ? console.log(err)
    : (db = client.db("Hotel"));
})

app.get("/buscar", function(req,res){
    db.collection("clientes").find().toArray(function(err,data){
        err
        ? res.send({err: true, contenido: err})
        : res.send({err: false, contenido: data})
    })
})

app.listen(3000)