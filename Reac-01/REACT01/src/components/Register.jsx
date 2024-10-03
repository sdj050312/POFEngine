import { useState } from "react";
// 1. 이름 
// 2. 생년월일 


const Register = () =>{
    const [name, setName] = useState("");

    const onChangeName = (e) =>{
        console.log(e);
        setName(e.target.value);

    };
    const [national, setNational] = useState("");
    const onChangeNational = (e) =>{
        console.log(e);
        setNational(e.target.value);

    }
    const [date , setDate] = useState("");
    const onChangeDate = (e) =>{
        console.log(e);
        setDate(e.target.value);

    }
    const [bio, setBio] = useState("");
    const onChangeBio = (e) =>{
        console.log(e);
        setBio(e.target.value);

    }
    const [contry, setContry] = useState("");
    const onChangeContry = (e) =>{
        setContry(e.target.value);
    }

    return( <div>
<div>
    <input value = {name}
     onChange={onChangeName}
      placeholder="이름" />
   </div>  
    <div>
    <input  placeholder="국적"  value = {national} onChange={onChangeNational}/>
    </div>
        <div>
            <input type="date" placeholder="생년월일" value={date} onChange={onChangeDate}
             />
        </div>
        <div>
            <textarea name="" id="" value={bio} placeholder="자기소개란" onChange={onChangeBio}></textarea>
        </div>
        <div>
            <select value={contry} onChange={onChangeContry} placeholder = "">
                <option value="" ></option>
                <option value="kr">한국</option>
                <option value="usa">미국</option>
                <option value="uk">영국</option>
            </select>
        </div>


    </div>
    );



};

export default Register; 

