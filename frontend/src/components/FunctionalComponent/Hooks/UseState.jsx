import { useState } from "react";
function UseState(){
    var initialVal=0;
    var s="type something"
    var[num,setNum] =useState(initialVal)
    var[string,setString]=useState(s)
    function handleDecrement(){
        setNum(num-1);
    }
    return (
        <div>
            <h1>usestate</h1>
            <h3>state intitial value is:{initialVal}</h3>
            <h3>updating state:{num}</h3>
            <button onClick={handleDecrement}>-</button>
            <button onClick={()=>{setNum(num+1)}}>+</button>
            <button onClick={()=>{setNum(num=0)}}>reset</button><br></br>
            <input onChange={()=>{setString(s=string)}} type="text" placeholder={s}/>
            <h3 onChange={()=>{setString(s=string)}}>the string typed is:{string}</h3>
        </div>
    )
}
export default UseState;