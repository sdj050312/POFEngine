const http = require('http');
const fs = require('fs');
// const http = require('http2'); // https와 적용이 되는것을 의미합니다. 

// console.log(http.STATUS_CODES);
// console.log(http.METHODS);


const server = http.createServer((req, res)=>{
    console.log('...incoming');
    console.log(req.headers);
    console.log(req.httpVersion);
    console.log(req.method);
    console.log(req.url);
    const url = req.url;
    res.setHeader('Content-Type', 'text/html');
    if(url === "/html"){ // html file을 보낼수 있고 jsoon도 보낼 수 있음 
     
       fs.createReadStream('./html/dd.html').pipe(res);
        
    }
    else if(url == "/found"){
        fs.createReadStream('./html/hey.html').pipe(res);
    }
    else{
        res.write('NOT Found');
    }
   
    
});

server.listen(8090);


