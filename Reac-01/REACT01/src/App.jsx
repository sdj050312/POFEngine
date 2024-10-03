import Profile from "./components/Profile"
import Register from "./components/Register";
import "./App.css";
import Button from "./component2/Button";

// useState의 내장 함수 
//화살표 함수 함수의 첫글자는 무조건 대문자로 해야합니다. 

function App() {
  //최상위 객체를 가지게 됩니다. rootComponent 
// 부모 요소 


 
return (
    <>
    <div className="map">
      <Button title = "button" btn = "button"></Button>
      <Button title = "click@button" btn = "Click"></Button>
      <Button title = "Register@button" btn = "Register"></Button>
      
      </div>
    </>
  );


}


export default App;

