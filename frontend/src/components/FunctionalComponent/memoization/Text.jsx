import { memo,useState } from "react"
const Text=()=> {
    var [text,setText]=useState("")
  return (
    <div>
        <h1>text box</h1>
        <input type="text" value={text} onChange={(e)=>{setText(e.target.value)}}></input>
        <h3>the text is:{text}</h3>
    </div>
  )
}

export default memo(Text)