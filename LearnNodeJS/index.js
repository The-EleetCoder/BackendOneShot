// importing 
import http from 'http';
import { generatePercent } from './features.js';
import fs from 'fs'; // used to interact with files 

// calling module
console.log(generatePercent())

const data = fs.readFileSync('./index.html');

// creating server
const server = http.createServer((req,res)=>{

    // routing
    if (req.url === '/'){
        res.end(data);
    }
    else if (req.url === '/about'){
        res.end("<h1>About Page</h1>");
    }
    else {
        res.end("<h1>Page not found!</h1>");
    }
})

// listening to server
server.listen(5000,()=>{
    console.log("server listening on port 5000")
});