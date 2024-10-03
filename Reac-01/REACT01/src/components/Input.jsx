import { useState } from "react";

const Input = () =>{

    const [input, SetInpt] = useState({
        name :"name",
        date:"",
        bio:"",
        national:""

    });
    
    const onChangeNational = (e) =>{
        SetInpt({
            ...input,
            national:e.target.value
        })
    }
    const onChangeName = (e) =>{
        SetInpt({
            ...input,
            name:e.target.value
        })
    }
    const onChangeBio = (e) =>{
        SetInpt({
            ...input,
            bio:e.target.value
        })
    }
    const onChangeDate = (e) =>{
        SetInpt({
            ...input,
            date:e.target.value
        })
    }
    return(
<>
 

</>
    );

}

export default Input;
