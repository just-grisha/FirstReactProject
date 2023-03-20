import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  console.log(count);

  function increament() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count -1);
  }
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={increament}>Increasment</button>
      <button onClick={decrement}>Decreasment</button>
    </div>
  );
}

export default App;
