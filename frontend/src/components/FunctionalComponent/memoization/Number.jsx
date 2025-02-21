import { memo,useState } from "react"
const Number = () => {
    var [num,setNum]=useState(0)
  return (
    <div>
        <h1>number box</h1>
        <input type="number" value={num} onChange={(e)=>{setNum(e.target.value)}}></input>
        <h3>the number is:{num}</h3>
    </div>
  )
}
export default memo(Number)