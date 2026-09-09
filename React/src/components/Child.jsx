// import React from 'react'

// const Child = ({sendData}) => {
//     const handleClick=()=>
//     {
//         sendData("Hello Parent");
//     }
//   return (
//     <div>
//       <h1>Child Component</h1>
//       <button onClick={handleClick}> Send Data to Parent</button>
//     </div>
//   )
// }

// export default Child

import React from 'react'
const Child = ({count,counter}) => {
  const incre=()=>
  {
    counter(count+1);
  }
  const decre=()=>
  {
    counter(count-1);
  }
  const reset=()=>
  {
    counter(count*0);
  }
  return (
    <div>
      <p>{count}</p>
      <button onClick={incre}>Increment</button>
      <button onClick={decre}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Child
