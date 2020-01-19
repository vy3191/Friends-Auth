import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Friend(props) {
  const {friend:{id, name, age, email}, update} = props;

  const removeFriend = () => {
    axios.delete(`http://localhost:5000/api/friends/${props.friend.id}`, {headers:{authorization:localStorage.getItem("token")}})
         .then( res => {
            console.log(res.data)
            update(res.data)
            props.history.push('/friends-list')
         })
         .catch( err => {
           console.log(err);
         })
  }
  return (
    <div style={{display:'flex', justifyContent:'center'}}>     
      <ul>
        <div style={{textAlign:'right'}}>
          <button  onClick={removeFriend}
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