import React, {useState,useEffect} from 'react';
import {Button} from 'reactstrap';
import axios from 'axios';

export default function EditFriend(props) {
   const {id} = props.match.params;  
   const [friend, setFriend] = useState({id:'', name:'', age:'',email:''});
   const [newFriend, setNewFriend] = useState({id:'', name:'', age:'',email:''})
   const [editing, setEditing] = useState(false);
   
   useEffect(() => {
     axios.get(`http://localhost:5000/api/friends/${id}`, {headers:{authorization:localStorage.getItem("token")}})
          .then( response => {
             console.log(response)
             console.log(response)
             setFriend({...friend, ...response.data})
          })
          .catch(err => {
            console.log(err);
          })
   }, [])

   const handleInput = (event) =>{
      setNewFriend({
        ...newFriend, [event.target.name]:event.target.value
      })
   }
   const toggleEditing = () => {
     setEditing(!editing);
   }
   
   const handleSubmit = (event) => {
      console.log(newFriend)
      event.preventDefault();
      axios.put(`http://localhost:5000/api/friends/${id}`,{...newFriend},
                {headers:{authorization:localStorage.getItem("token")}}
                )
           .then( response => {
              console.log(response)
              props.update(response.data)
              props.history.push("/friends-list")
           })
           .catch(err => {
             console.log(err);
           })
   }
   console.log(props)
   return(
     <div>
       <div>
         {!editing ? 
          <Button onClick={toggleEditing}>Edit</Button> :
          <Button onClick={toggleEditing}>Editing now..</Button> }
       </div>
       { editing ? (<div>
         <form onSubmit={handleSubmit}>           
           <input type="text"
                  name="name"
                  onChange={handleInput}
                  placeholder={friend.name}
                  value={newFriend.name} />
           <input type="text"
                  name="age" 
                  onChange={handleInput}
                  placeholder={friend.age}
                  value={newFriend.age} />
           <input type="text"
                  name="email" 
                  onChange={handleInput} 
                  placeholder={friend.email}
                  value={newFriend.email} />
           <button>Save</button>
         </form>
       </div>) :
       (<div>
       <span>
          <li> Id:{friend.id}</li>
          <li> Name:{friend.name}</li>
          <li> Age: {friend.age }</li>
          <li> Email:{friend.email} </li>
          </span>
      </div> )  } 
     </div>
   )
}