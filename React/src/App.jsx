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

// import React,{useState,useEffect} from 'react'

// const App = () => {
//   const [users,setUsers]=useState([]);
//   const fetchUsers=()=>
//   {
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response=>response.json())
//     .then(data=>setUsers(data))
//   }
//   //fetchUsers();
//   useEffect(()=>{
//     fetchUsers();
//   },[])
//   useEffect(()=>{
//   console.log(users);
//   },[users])
//   return (
//     <div>
//      <h1>Users Data</h1>
//      <table border="1">
//       <thead>
//       <tr>
//         <td>id</td>
//         <td>name</td>
//         <td>username</td>
//         <td>email</td>
//       </tr>
//       </thead>
//       <tbody>
//        {
//         users.map((user)=>(
//           <tr key={user.id} >
//             <td>{user.id}</td>
//             <td>{user.name}</td>
//             <td>{user.username}</td>
//             <td>{user.email}</td>
//           </tr>
//         ))
//        }
//       </tbody>
//      </table>
//     </div>
//   )
// }

// export default App;

// import React,{useState} from 'react'

// const App = () => {
//   const [text,setText]=useState("");
//   return (
//     <div>
//       <input type="text" placeholder='Enter the name...' onChange={(e)=>setText(e.target.value)} />
//       <p>{text}</p>
//     </div>
//   )
// }

// export default App


// import React,{useState} from 'react'

// const App = () => {
//   const [name,setName]=useState("");
//   const [submitted,setSubmitted]=useState("");
//   function click(e)
//   {
//     e.preventDefault();
//     setSubmitted(name);
//   }
//   return (
//     <div>
//       <form onSubmit={click}>
//            <input type="text" placeholder='Enter the name:' onChange={(e)=>setName(e.target.value)}/>
//            <button type="submit">Submit</button>
//       </form>
//       <h1>{submitted}</h1>
//     </div>
//   )
// }

// export default App


import React,{useState} from 'react'

const App = () => {
  const [formData,setFormdata]=useState({name:"",email:"",pass:"",});
  const [subForm,setSubForm]=useState(null);
  function change(e)
  {
      setFormdata
      (
        {
          ...formData,
           [e.target.name]:e.target.value,

        }
      );

  }
  function click(e)
  {
       e.preventDefault();
       setSubForm(formData);
       setFormdata(
           {name:"",email:"",pass:"",}
       )
  }
  return (
    <div>
      <form onSubmit={click}>
        <input type="text" placeholder='Enter the name:' onChange={change} name="name" value={formData.name}required />
      <input type="email" placeholder='Enter the email:' onChange={change} name="email" value={formData.email} required/>
      <input type="password" placeholder='Enter the password' onChange={change} name="pass"  value={formData.pass}required/>
      <button type="submit">Submit</button>
      </form>
       {
        subForm &&(
          <div>
            <h2>Form Submitted</h2>
            <p>Name:{subForm.name}</p>
            <p>Email:{subForm.email}</p>
            <p>Password:{subForm.pass}</p>
          </div>
        )
       }
    </div>
  )
}

export default App

