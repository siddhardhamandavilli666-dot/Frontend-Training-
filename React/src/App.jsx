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


// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import "./App.css";
// import { Routes, Route, Link } from "react-router-dom";
// import Home from "./components/Home";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Products from "./components/Products";
// import FAQ from "./components/FAQ";
// import PrivacyPolicy from "./components/PrivacyPolicy.jsx";

// function App() {
//   return (
//     <>
//       <div className="container text-center mt-4">
//         <h2>My Website</h2>

//         <form className="d-flex justify-content-center mt-3">
//           <input
//             className="form-control"
//             type="search"
//             placeholder="Search"
//             style={{ maxWidth: "700px", height: "50px" }}
//           />
//           <button className="btn btn-primary ms-2" type="submit">
//             Search
//           </button>
//         </form>

//         <nav className="mt-4">
//           <Link className="btn btn-link" to="/">
//             Home
//           </Link>

//           <Link className="btn btn-link" to="/about">
//             About
//           </Link>

//           <Link className="btn btn-link" to="/contact">
//             Contact
//           </Link>

//           <div className="btn-group">
//             <button
//               className="btn btn-link dropdown-toggle"
//               type="button"
//               data-bs-toggle="dropdown"
//             >
//               Products
//             </button>

//             <ul className="dropdown-menu">
//               <li>
//                 <Link className="dropdown-item" to="/products">
//                   All Products
//                 </Link>
//               </li>
//               <li>
//                 <Link className="dropdown-item" to="/products/cars">
//                   Cars
//                 </Link>
//               </li>
//               <li>
//                 <Link className="dropdown-item" to="/products/bikes">
//                   Bikes
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           <Link className="btn btn-link" to="/faq">
//             FAQ
//           </Link>

//           <Link className="btn btn-link" to="/privacy-policy">
//             Privacy Policy
//           </Link>
//         </nav>
//       </div>

//       <div className="container mt-4">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/products" element={<Products />} />
//           <Route path="/products/cars" element={<h1>Cars</h1>} />
//           <Route path="/products/bikes" element={<h1>Bikes</h1>} />
//           <Route path="/faq" element={<FAQ />} />
//           <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//         </Routes>
//       </div>
//     </>
//   );
// }

// export default App;




import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
const App = () => {
  const [formData,setFormdata]=useState({name:"",email:"",Mobile:"",gender:"",Department:"",Designation:"",Salary:"",joiningDate:"",Password:"",confirmPassword:"",TermsandConditions:"",});
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
  function handleClick(e)
  {
       e.preventDefault();
       setSubForm(formData);
       setFormdata(
           {name:"",email:"",Mobile:"",gender:"",Department:"",Designation:"",Salary:"",joiningDate:"",Password:"",confirmPassword:"",TermsandConditions:"",}
       )
  }
  return (
    <div className="container mt-5 text-center">
      <form  onSubmit={handleClick}>
        <h1 className='text-center'>Registartion Form</h1>
        <label htmlFor="name"><b>Name: </b></label>
      <input type="text" placeholder='Enter the Employee Name' onChange={change} name="name" value={formData.name} className="form-control mb-3 w-25 mx-auto" required /> <br />
       <label htmlFor="email"><b>Email: </b></label>
      <input type="email" placeholder='Enter the email' onChange={change} name="email" value={formData.email} className="form-control mb-3 w-25 mx-auto" required/> <br />
       <label htmlFor="Mobile"><b>Mobile: </b></label>
      <input type="tel" placeholder='Enter the Mobile number' onChange={change} name="Mobile"  value={formData.Mobile} className="form-control mb-3 w-25 mx-auto" required/> <br />
      <label htmlFor="Gender"><b>Gender: </b></label>
      <select onChange={change} name="gender" value={formData.gender} className="form-control mb-3 w-25 mx-auto" required>
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select> 
      <label htmlFor="Department"><b>Department</b></label>
      <input type="text" placeholder='Enter the Department' onChange={change} name="Department" value={formData.Department} className="form-control mb-3 w-25 mx-auto" required/> <br />
      <label htmlFor="Designation"><b>Designation</b></label>
      <input type="text" placeholder='Enter the Designation' onChange={change} name="Designation" value={formData.Designation} className="form-control mb-3 w-25 mx-auto" required/> <br />
      <label htmlFor="Salary"><b>Salary</b></label>
      <input type="number" placeholder='Enter the Salary' onChange={change} name="Salary" value={formData.Salary} className="form-control mb-3 w-25 mx-auto" required/> <br />
      <label htmlFor="joiningDate"><b>Joining Date</b></label>
      <input type="date" placeholder='Enter the Joining Date' onChange={change} name="joiningDate" value={formData.joiningDate} className="form-control mb-3 w-25 mx-auto" required/> <br />
      <label htmlFor="Password"><b>Password</b></label>
      <input type="password" placeholder='Enter the Password' onChange={change} name="Password" value={formData.Password} className="form-control mb-3 w-25 mx-auto" required/> <br />
      <label htmlFor="confirmPassword"><b>Confirm Password</b></label>
      <input type="password" placeholder='Confirm the Password' onChange={change} name="confirmPassword" value={formData.confirmPassword} className="form-control mb-3 w-25 mx-auto" required/> <br />
      <label htmlFor="TermsandConditions"><b>Terms and Conditions</b></label>
      <input type="checkbox" onChange={change} name="TermsandConditions" value={formData.TermsandConditions} className="form-check-input mb-3 mx-auto" required/> <br />    
      <button type="submit" className="btn btn-primary" >Submit</button>
      </form>
       {
        subForm &&(
          <div className="mt-4">
            <h2>Form Submitted</h2>
          </div>
        )
       }
    </div>
  )

}
export default App