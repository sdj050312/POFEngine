const Main = () =>{

    const user = {
        name:"손동진",
        islogin : true
    }

    return( <><main>
        <p>리엑트는 정말 간편한거였구나 ㅎㅎ </p>
        
        <p>{user.islogin ? <div>로그아웃</div>: <div>로그인</div>}</p>
        </main></>
    );
    
    }
export default Main;