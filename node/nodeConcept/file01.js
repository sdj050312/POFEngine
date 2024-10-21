const fs = require('fs');

const readStream = fs.createReadStream('./fileRead.txt');
const createStream = fs.createWriteStream('./fileRead.txt');

createStream.on('finish', ()=>{
    console.log();
})

createStream.write('안녕');
createStream.write('만나서 반가워');