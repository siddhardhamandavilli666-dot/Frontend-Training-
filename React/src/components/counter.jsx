import React from "react";
import{ useState } from "react";
const Counter = () => {
      const [count, setCount] = React.useState(0);

    let increment = () => {
        setCount(count + 1);
    }
     return(
        <>
        <h1>Counter</h1>
        <button onClick={increment}>Increment</button>
        <p>Count: {count}</p>
        </>
     )
}
export default Counter