import React from 'react';
import { Link } from 'react-router-dom';

export default function Friend(props) {
  const {id, name, age, email} = props.friend;
  return (
    <div style={{display:'flex', justifyContent:'center'}}>     
      <ul>
        <div style={{textAlign:'right'}}>
          <button 
            style={
                 {fontSize: "20px", 
                 color: "red", 
                 cursor:'pointer'}
                 }>X</button>
        </div>  
        <Link to={`/friends-list/${props.friend.id}`}>      
          <span>
          <li> Id:{id}</li>
          <li> Name: {name}</li>
          <li> Age: {age}</li>
          <li> Email: {email}</li>
          </span>
        </Link>
      </ul>
    </div>
  )
}