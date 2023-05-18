/*Server-side code using Express to handle request routing and file serving*/
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
//Tells server to serve static files necessary for site content (css, images, static files)
const static_path = path.join(__dirname, "public");
//Tells server to serve files needed for react build
const react_path = path.join(__dirname, "/homepage/build");
app.use(express.static(static_path));
app.use(express.static(react_path));

//Endpoints 
app.get("/content/resume.html", (req, res) =>{
    res.send("This is a resume");
})

app.get("/content/homepage", (req, res) =>{
    console.log("test")
    res.sendFile(path.join(__dirname, "homepage/build/index.html"));
})

//Starts up the server
app.listen(port,  ()=>{
    console.log(`Server is running on port ${port}`)
 })