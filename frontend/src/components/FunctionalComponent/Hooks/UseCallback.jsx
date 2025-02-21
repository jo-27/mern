import { useState, useCallback } from "react";

const UseCallback = () => {
  var [number, setNumber] = useState(0);
  var [theme, setTheme] = useState(false);
  var styling={
    backgroundColor: theme ? "black" : "pink",
    color: theme ? "pink" : "black",
  }
  var numList=useCallback((mul)=>{
    return [number+mul*2,number+mul*4,number+mul*8]
  },[number])
  return (
    <>
    <button onClick={()=>setTheme(!theme)}>toggle theme</button>
    <div style={styling}>
      <h1>this is useCallback</h1>
      Number box:{""}
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(parseInt(e.target.value));
        }}
      ></input>
    <h2>the number list is </h2>
    {numList(10).map((val,index)=>(<h2 key={index}>{val}</h2>))}
    </div>
    </>
  );
};
export default UseCallback;
