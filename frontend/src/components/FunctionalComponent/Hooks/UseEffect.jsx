import {useState} from "react";
import {useEffect} from "react";
const UseEffect = () =>{
    var[text,setText]=useState('hi')
    var[text1,setText1]=useState('hello')
    useEffect(()=>{
        console.log(text)
    },[text])
    useEffect(()=>{
        console.log(text1)
    },[text1])
    return(
        <section>
            <h1>This is use effect</h1>
            type your Text:{" "}
            <input type="text" value={text} 
            onChange={(event)=>setText(event.target.value)}/>
            <h2>The text typed is {text}</h2>
            type your Text:{" "}
            <input type="text" value={text1} 
            onChange={(event)=>setText1(event.target.value)}/>
            <h2>The text typed is {text1}</h2>
        </section>
    )
}
export default UseEffect;