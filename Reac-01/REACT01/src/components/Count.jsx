import {useState, useEffect} from "react";
import "./count.css";



const Count = () =>{
    const [plus, setPlus] = useState(0);
    const [input, setInput] = useState("");
useEffect(() => {
    console.log(`count: ${plus}`)
}, [plus]); //의존성 배열, dependancy array, deps
    return(
        <>  <div className="title">
            <h1>카운터를 시작!</h1>
            </div>
            <div className="map">
            <h2>현재의 값 : {plus}</h2>
            </div>
        <div className = "main">
           <button onClick={()=>{
            setPlus(plus -1)
           }}>+1</button>
            <button onClick={()=>{
            setPlus(plus -10)
           }}>-10</button>
           <button onClick={()=>{
            setPlus(plus -100)
           }}>-100</button>
           <button onClick={()=>{
            setPlus(plus *0)
           }}>0</button>
            <button onClick={()=>{
            setPlus(plus +1)
           }}>+1</button>
           
           <button onClick={()=>{
            setPlus(plus +10)
           }}>+10</button>
           
           <button onClick={()=>{
            setPlus(plus +100)
           }}>+100</button>
           </div>
        </>
    );
}

export default Count;
