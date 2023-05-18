const http = require('http');
const path = require('path');
const fs = require('fs');
const express = require("express");

let sendHello = function(res){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write("Hello World");
    res.end();
}

const app = express();
const port = 8080;
const static_path = path.join(__dirname, "public");
app.use(express.static(static_path));

app.listen(port,  ()=>{
    console.log(`Server is running on port ${port}`)
 })