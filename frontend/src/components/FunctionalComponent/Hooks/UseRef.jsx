import { useEffect, useRef, useState } from "react";
const UseRef = () => {
  var [text, setText] = useState("");
  const [count, setCount] = useState(0);
  const prevCount = useRef(null);
  var previousRender=useRef();
  useEffect(() => {
    prevCount.current = count; 
  }, [count]);
  useEffect(()=>{previousRender.current=text;
    console.log(previousRender.current);
  },[text])
  return (
    <div>
      <h1>This is useRef example</h1>
      Type your text :{" "}
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <h2>This is current render is:{text}</h2>
      <h2>This is previous render is:{previousRender.current}</h2><hr></hr>
      <p>Current Count: {count}</p>
      <p>Previous Count: {prevCount.current}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
export default UseRef;
