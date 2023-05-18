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
//Specifies folder with static content that server needs to serve (css, images, static files, etc)
const static_path = path.join(__dirname, "public");
app.use(express.static(static_path));

//Endpoints 
app.get("/content/resume.html", (req, res) =>{
    res.send("This is a resume");
})

app.get("/content/homepage.html", (req, res) =>{
    res.sendFile("/content/homepage.html");
})

//Starts up the server
app.listen(port,  ()=>{
    console.log(`Server is running on port ${port}`)
 })