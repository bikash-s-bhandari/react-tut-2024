import { useState } from "react";
import '../style.css'

const Counter = () => {
  const [count, setCount] = useState(0);
  
  // Function to decrement the counter
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div>
    <h1 className="heading">Counter: {count}</h1>
    <button onClick={()=>setCount(count+1)}>Increment</button> {/* Button to increment counter */}
    <button onClick={decrement}>Decrement</button> {/* Button to decrement counter */}
  </div>
  );
};

export default Counter;
