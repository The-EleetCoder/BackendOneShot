// importing 
import http from 'http';
import { generatePercent } from './features.js';

// calling module
console.log(generatePercent())

// creating server
const server = http.createServer((req,res)=>{

    // routing
    if (req.url === '/'){
        res.end("<h1>Home Page</h1>")
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