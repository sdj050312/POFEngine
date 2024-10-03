const Footer = () =>{
// jsx 주의 사항 자바 스크립트 표현식만 넣을 수 있습니다.
//2. 숫자, 문자열 배열값만 랜더링이 된다. 
// 3. 모든 태그는 닫혀 있어야함. 
//4. 최상위 태그는 딱 하나만 허용해야함. header, main , section, footer
const number = 10;
const ARR = ["안녕하세여", "만나서 반가워요", "여러분덕분입니다."];


   return(
    <>
   <h3>안녕하세요 만나서 반갑습니다.</h3>
        <p>{number % 2 == 0 ? "짝수" : "홀수"} </p>
        <p>{ARR}</p>
    
    </>
   );
};

export default Footer;

