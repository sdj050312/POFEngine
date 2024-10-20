const fs = require('fs');
const zlib = require('zlib');

const readStream = fs.createReadStream('./file01.txt');
const zibStream  = zlib.createGzip();
const writeStream = fs.createWriteStream('./file.txt');
const piping = readStream.pipe(zibStream).pipe(writeStream);   // 파이프간에 연결을 하는것을 말함 .read에서 받아서 write를 읽을 수 있음 
piping.on('finish', ()=>{
    console.log('done');
})

const http = require('http');
const server = http.createServer((req, res)=>{
    fs.readFile('file.txt', (err, data)=>{
        res.end(data);
    })
});

server.listen(3000);