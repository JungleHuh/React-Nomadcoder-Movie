import { useState,useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("i run all the time");
  useEffect(() => {
    console.log("Call the API");
  }, []);
  useEffect(()=>{
    if (keyword !== "" && keyword.length > 5 )
    console.log("Search For", keyword);
  }, [keyword]);
  return (
    <div>
    <input
    value = {keyword}
    onChange = {onChange} 
    type = "text" 
    placeholder="Serach here." />

    <h1>{counter}</h1>
    <button onClick = {onClick}>Click Me</button>
    </div>
  );
}

export default App;
