const Button = (props) =>{
    const button = "클릭";
    const login = "로그인";
    const logout = "로그아웃";
    return (
        <>
            <link rel="stylesheet" href="./button.css" />
        <button type ="button">{button}</button>
        <button type ="button">{login}</button>
        
        <button type= "button">{logout}</button>
        </>
    );

};
Button.defaultProps = {
    color : "red"

}

export default Button; 
