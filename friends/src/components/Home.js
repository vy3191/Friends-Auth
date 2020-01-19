import React, {Component} from 'react';
import {Route,Switch, Redirect, Link} from 'react-router-dom';
import  Friends from './Friends';
import NewFriends from './NewFriends';
import Login from './Login';

export default class Home extends Component {
   constructor(props){
   super(props);
  
  } 

  render() {
    return(
      <div>        
         <div>
           <h1>Manage Your Friends</h1>  
           <p>This app lets you manage your friends and you can add, delete, and modify your friends list</p> 
         </div>
      </div>
    )
  }
};