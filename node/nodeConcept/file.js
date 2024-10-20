const fs =  require('fs');

const readStream = fs.createReadStream('./file.txt');
const creatStream = fs.createWriteStream('./file.txt');

creatStream.on('finish', ()=>{
    console.log('done');

})

creatStream.write('안녕');
creatStream.write('만나서 반가워');