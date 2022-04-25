// Program for Routing
const http  = require('http');
const fs  = require('fs');
const _ = require('lodash');

const server= http.createServer((req,res)=>{

    //lodash
    const num = _.random(0,20);
    console.log(num);
    // gets random num b/w 0 & 20

    // to run function only once 
    // we use 'once' func from lodash
    const greet = _.once(()=>{
        console.log('hello once');
    });

    greet();
    greet();

    // setting header content type
    res.setHeader('Content-Type', 'text/html');

    let path = './views/';
    switch(req.url){
        case '/':  
            path+='index.html';
            res.statusCode=200;
            break;
        
        case '/about':
            path+='about.html';
            res.statusCode=200;
            break;
        
        case '/about-me':
            res.statusCode=301;
            // THIS IS REDIRECTION
            res.setHeader('Location', '/about');
            res.end();
        
        default:
            path+='404.html';
            res.statusCode=404;
            break;
    }

    // send a HTML file
    fs.readFile(path, (err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            res.end(data); 
            // or u can also use 
            //res.write(data);
            // res.end();
        }
    })
})

server.listen(3000, 'localhost', ()=>{
    console.log('Server running on port 3000');
})