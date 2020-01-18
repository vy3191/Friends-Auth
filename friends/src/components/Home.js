import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import  Friends from './Friends';
import NewFriends from './NewFriends';
import Login from './Login';

export default class Home extends Component {
   constructor(props){
   super(props);
   this.state = {
    
    };
  } 

  render() {
    return(
      <div>
        <div>
           <ul>             
             <li>
               <Link to="/get-friends">Get Friends</Link>
             </li>
             <li>
               <Link to="/add-friends">Add Friends</Link>
             </li>             
             <li>
               <Link to="/logout">Logout</Link>
             </li>
           </ul>
         </div>
         <div>
           <Route path="/get-friends" component={Friends} />
           <Route path="/add-friends" component={NewFriends} />
          
         </div>
      </div>
    )
  }
};