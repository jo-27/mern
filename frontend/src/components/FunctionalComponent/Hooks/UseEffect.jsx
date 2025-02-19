import { useState } from "react";
import { useEffect } from "react";
const UseEffect = () => {
  var [text, setText] = useState("hi");
  useEffect(() => {
    console.log(text);
  }, [text]);
  return (
    <section>
      <h1>This is use effect</h1>
      type your Text:{" "}
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <h2>The text typed is {text}</h2>
    </section>
  );
};
export default UseEffect;
