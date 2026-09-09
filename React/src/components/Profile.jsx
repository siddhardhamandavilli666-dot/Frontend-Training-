import React from 'react'
import "./Profile.css"
const Profile = () => {
    let name="Siddhardha";
  const age=19;
  const country="India";
  return (
    <div className='card'>
       <h3>Name:{name}</h3>
      <p>Age:{age}</p>
      <p>Country:{country}</p>
    </div>
  )
}

export default Profile
