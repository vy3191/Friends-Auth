import React, {useState} from 'react';
import {Button} from 'reactstrap';
import axios from 'axios';

export default function EditFriend(props) {
   console.log(props)
   const [editing, setEditing] = useState(false);
   return(
     <div>
       <div>
         <Button>Edit</Button>
       </div>
       {/* <span>
          <li> Id:{id}</li>
          <li> Name: {name}</li>
          <li> Age: {age}</li>
          <li> Email: {email}</li>
          </span> */}
     </div>
   )
}