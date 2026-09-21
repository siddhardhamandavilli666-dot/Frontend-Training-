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
import 'bootstrap/dist/css/bootstrap.min.css'
const App = () => {
  const [formData,setFormdata]=useState({name:"",email:"",batch:"",});
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
           {name:"",email:"",batch:"",}
       )
  }
  return (
    <div className="container mt-5 text-center">
      <form  onSubmit={click}>
        <h1 className='text-center'>Registartion Form</h1>
        <label htmlFor="name"><b>Name: </b></label>
      <input type="text" placeholder='Enter the name' onChange={change} name="name" value={formData.name} className="form-control mb-3 w-25 mx-auto" required /> <br />
       <label htmlFor="email"><b>Email: </b></label>
      <input type="email" placeholder='Enter the email' onChange={change} name="email" value={formData.email} className="form-control mb-3 w-25 mx-auto" required/> <br />
       <label htmlFor="batch"><b>Batch: </b></label>
      <input type="number" placeholder='Enter the Batch' onChange={change} name="batch"  value={formData.batch} className="form-control mb-3 w-25 mx-auto" required/> <br />
      <button type="submit" className="btn btn-primary" >Submit</button>
      </form>
       {
        subForm &&(
          <div className="mt-4">
            <h2>Form Submitted</h2>
            <p>Name:{subForm.name}</p>
            <p>Email:{subForm.email}</p>
            <p>Batch:{subForm.batch}</p>
          </div>
        )
       }
    </div>
  )

}
export default App



// import { useState, useMemo, useRef, useCallback } from "react";
// import Student from "./Student";
// import useDebounce from "./useDebounce";
// function App() {

//     const [students] = useState([
//         {
//             id: 1,
//             name: "Pavan",
//             department: "CSE",
//             cgpa: 8.5
//         },
//         {
//             id: 2,
//             name: "Rahul",
//             department: "ECE",
//             cgpa: 8.2
//         },
//         {
//             id: 3,
//             name: "Priya",
//             department: "CSE",
//             cgpa: 9.1
//         },
//         {
//             id: 4,
//             name: "Anil",
//             department: "IT",
//             cgpa: 7.8
//         }
//     ]);

//     const [searchTerm, setSearchTerm] = useState("");

//     const [count, setCount] = useState(0);

//     const [selectedStudent, setSelectedStudent] = useState(null);

//     // useRef
//     const searchInputRef = useRef(null);

//     // Custom Hook
//     const debouncedSearch = useDebounce(searchTerm, 500);

//     // useMemo
//     const filteredStudents = useMemo(() => {

//         console.log("Filtering students...");

//         return students.filter(student =>
//             student.name
//                 .toLowerCase()
//                 .includes(debouncedSearch.toLowerCase())
//         );

//     }, [students, debouncedSearch]);

//     // useCallback
//     const handleSelect = useCallback((student) => {

//         setSelectedStudent(student);

//     }, []);

//     // useRef
//     const focusSearch = () => {

//         searchInputRef.current.focus();

//     };

//     return (
//         <div className="container mt-4">

//             <h1>Student Management</h1>

//             <hr />

//             <div className="mb-3">

//                 <input
//                     ref={searchInputRef}
//                     type="text"
//                     className="form-control"
//                     placeholder="Search student..."
//                     value={searchTerm}
//                     onChange={(e) =>
//                         setSearchTerm(e.target.value)
//                     }
//                 />

//                 <button
//                     onClick={focusSearch}
//                     className="btn btn-secondary mt-2"
//                 >
//                     Focus Search
//                 </button>

//             </div>

//             <hr />

//             <button
//                 onClick={() => setCount(count + 1)}
//                 className="btn btn-success mb-3"
//             >
//                 Count: {count}
//             </button>

//             <h3>
//                 Students
//             </h3>

//             {filteredStudents.map(student => (

//                 <Student
//                     key={student.id}
//                     student={student}
//                     onSelect={handleSelect}
//                 />

//             ))}

//             {selectedStudent && (

//                 <div className="alert alert-info mt-3">

//                     <h4>
//                         Selected Student
//                     </h4>

//                     <p>
//                         Name: {selectedStudent.name}
//                     </p>

//                     <p>
//                         Department: {selectedStudent.department}
//                     </p>

//                     <p>
//                         CGPA: {selectedStudent.cgpa}
//                     </p>

//                 </div>

//             )}

//         </div>
//     );
// }
// export default App;
