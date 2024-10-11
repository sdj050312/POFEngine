document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".section1-log");
    const totalSlides = slides.length;
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide) => { // 상수 슬라이드 배열에 인덱스 하나씩 꺼내기 
            slide.style.opacity = "0";
            slide.classList.remove("active"); // 초기값은 무조건 꺼져있어야함
        });
        slides[index].classList.add('active'); // 현재 슬라이드에 'active' 클래스 추가
        setTimeout(() => {
            slides[index].style.opacity = "1"; // 현재 슬라이드를 서서히 나타나게 함
        }, 50); // 작은 지연을 줘서 display가 적용된 후에 opacity를 변경
    
            
    }

    function nextSlide() { // 현재 인덱스 0+1 % 3 = 1 1씩 가져오기 
        currentIndex = (currentIndex + 1) % totalSlides; 
        showSlide(currentIndex);
    }

    showSlide(currentIndex);
    setInterval(nextSlide, 3000);
});