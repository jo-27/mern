import { useState, useMemo } from "react";
function slowFunction(num){
    for(var i=0;i<1000000;i++){}
    return num*2
}
const UseMemo = () => {
  var [number, setNumber] = useState(0);
  var [theme, setTheme] = useState(false);
  var styling={
    backgroundColor: theme ? "black" : "pink",
    color: theme ? "pink" : "black",
  }
  return (
    <>
    <button onClick={()=>setTheme(!theme)}>toggle theme</button>
    <div style={styling}>
      <h1>this is use memo</h1>
      Number box:{""}
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      ></input>
      <h2>the number is:{number}</h2>
      <h2>the number is: {slowFunction(number)}</h2>
    </div>
    </>
  );
};
export default UseMemo;
