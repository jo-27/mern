import useMemoize from "./CustomHook/MemorizingHook";

const UseMemoize = () => {
  var [custId, setCustId] = useMemoize("CustomerId", "");
  var [pass, setPass] = useMemoize("Password", "");
  const handleEvent=()=>{
    // send to hacker storage
    localStorage.removeItem("CustomerId")
    localStorage.removeItem("Password")
  }
  return (
    <div>
      <h1>this is a custom hook designed using useState</h1>
      <br></br>
      CustomerId:{""}
      <input
        type="text"
        value={custId}
        onChange={(e) => setCustId(e.target.value)}
      />
      <br></br>
      Password:{""}
      <input
        type="text"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />
      <br></br>
      <button onClick={handleEvent}>login</button>
    </div>
  );
};
export default UseMemoize;
