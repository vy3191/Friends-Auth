import React, {useState, useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import Friend from './Friend';
import axios from 'axios';

function Friends(props) {
  const [friends, setFriends] = useState([]);
  
  useEffect(() => { 
    axios.get('http://localhost:5000/api/friends', {headers:{authorization: localStorage.getItem('token')}})
    .then( response => {
       console.log(response.data);
       if(response.data) { 
         setFriends([...response.data]);
       }       
    })
    .catch( err => {
       console.log(err)
    });
  },[]);
  
  //  if(!friends[0].id) {
  //     return <Redirect to='loading' />
  // };
   return (
    <> 
    <div>
      <h1>Friends List</h1>
    </div>
    <div>
      { friends.map( (friend,index) => (<Friend friend={friend} key={index}/>)) }
    </div>
    </>
  )
}

export default Friends
