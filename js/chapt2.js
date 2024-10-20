
function add10(){




const promis = new Promise((resolve, reject)=>{ // 성공, 실패 
    // 비동기 작업 실행 하는 함수라고 합니다. 
    // executor 

    setTimeout(()=>{
        const num = 10; 
        if(typeof num === 'number'){
            resolve(num + 10);
        }
        else{
            reject("num은 숫자가 아니무니다.");
        }
        console.log('안녕');
        reject("왜 실패이유...");
    }, 2000);


    
});

return promis;
}
const p = add10(0);
p.then((result)=>{
    console.log(result);
   
    const newP = add10(result);
    newP.then((result)=>{
        console.log(result);
    });
});

// then 그후에 

// promis.then((value)=>{
//     console.log(value);
// }).catch((error)=>{
//     console.log(error);
// })

// // 에러 잡는거 
// promis.catch((error)=>{
//     console.log(error);
// })



async function getDate(){
    return{
        name : "손동진",
        id : "winterload"
    }
}