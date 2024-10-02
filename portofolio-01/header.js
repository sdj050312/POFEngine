//Header에  페이지 아래로 스크롤시 다크 스타일링 적용 

const Header = document.querySelector('.head');
const Atag  = document.querySelectorAll('.atag');
const Bame = document.querySelector('.sdj');

// 요소의 높이를 측정을 해줘 너의 높이가 몇인지 알려줘 
const headerColor  = Header.getBoundingClientRect().height;

document.addEventListener('scroll', ()=>{
    if(window.scrollY > headerColor+700){
        Bame.classList.add('active');
        Atag.forEach((Atag) =>{
            Atag.classList.add('heada');
        })
        Header.classList.add('active-header');
    }else{
        Bame.classList.remove('active');
        
        Atag.forEach((Atag)=>{
            Atag.classList.remove('heada');
        });

        Header.classList.remove('active-header');
    }

});
// 현재 스크롤 위치를 확인
const position = position.getBoundingClientRect().height;
document.addEventListener('scroll', () =>{
    if(window.scrollY > he){
    for(var i = 0; i < Atag.length[i]; i++){
        Atag.length.classList.add('heada')
    }
}
})

