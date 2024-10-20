// 배달의 민족 음식을 주문하는 상황 

function orderFood (callback){ // 매개 변수 
    setTimeout(()=>{ 
        const food = "떡볶이"; // 지역 변수 
        callback(food); // 해당 매개변수를 지역변수 값을 출력 

    }, 2000)
}


function cooldownFood(food, callback){
    setTimeout(() => {
        const callfood = `식은 ${food}`;
        callback(callfood);
    }, 2000);
}

function iceFood(food, callback){
    setTimeout(()=>{
        const iceFood = `냉동식품 : ${food}`;
        callback(iceFood);
    },2000)
}

orderFood((food)=>{
    console.log(food);

    cooldownFood(food, (callfood) =>{
        console.log(callfood);    });

    iceFood(food, (iceFood)=>{
        console.log(iceFood);
    })
});
