import React from 'react'
import './User.css'
 function User({name,email}) {
  return (
    <div className='user-block'>
     <h2>{name}</h2>
     <h2>{email}</h2>
    </div>
  )
}
export default User;
