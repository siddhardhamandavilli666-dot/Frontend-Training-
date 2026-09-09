// import React from 'react'
// import Child1 from './components/Child1';
// import pizza from "./assets/pizza.webp"
// const App = () => {
//   const title="Pizza";
//   const price=399;
//   return (
//     <div>
//        <Child1 pizza={pizza} title={title} price={price}/>
//     </div>
//   )
// }

// export default App

// import React,{useState} from 'react'

// const App = () => {
//   const [count,setCount]=useState(0);
//   const click=()=>
//   {
//     setCount(count+1);
//   }
//   return (
//     <div>
//       <p>{count}</p>
//       <button onClick={click}>click</button>
//     </div>
//   )
// }

// export default App

// import React,{useState} from 'react'
// import Child from "./components/Child.jsx"
// const App = () => {
//   const [count,setCount]=useState(0);
//   return (
//     <div>
//       <Child count={count} counter={setCount}/>
//     </div>
//   )
// }

// export default App

// import React,{useState} from 'react'

// const App = () => {
//   const [password,setPassword]=useState(false);
//   return (
//     <div>
//        <input type={password ? "text": "password"} placeholder='Enter the Password'/>
//        <button onClick={()=>{setPassword(!password)}}>{password ? "Hide":"Show"}</button>
//     </div>
//   )
// }

// export default App

// import React,{useState} from 'react'

// const App = () => {
//   const [show,setShow]=useState(false);
//   const click=()=>
//     {
//       setShow(!show)
//     } 
//   return (
//     <div>
//         <button onClick={click}>{show?"Hide":"Show"}</button>
//         {show && <p>This is a secret message!</p>}
//     </div>
//   )
// }

// export default App

import React,{useState,useEffect} from 'react'

const App = () => {
  const [users,setUsers]=useState([]);
  const fetchUsers=()=>
  {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response=>response.json())
    .then(data=>setUsers(data))
  }
  //fetchUsers();
  useEffect(()=>{
    fetchUsers();
  },[])
  useEffect(()=>{
  console.log(users);
  },[users])
  return (
    <div>
     <h1>Users Data</h1>
     <table border="1">
      <thead>
      <tr>
        <td>id</td>
        <td>name</td>
        <td>username</td>
        <td>email</td>
      </tr>
      </thead>
      <tbody>
       {
        users.map((user)=>(
          <tr key={user.id} >
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
          </tr>
        ))
       }
      </tbody>
     </table>
    </div>
  )
}

export default App
