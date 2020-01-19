import React, {useState, useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import Friend from './Friend';
import axios from 'axios';

function Friends({friends, update}) {
  //  console.log(props)
   return (
    <> 
    <div>
      <h1>Friends List</h1>
    </div>
    <div>
      { friends.map( (friend,index) => (<Friend friend={friend} update={update} key={index}/>)) }
    </div>
    </>
  )
}

export default Friends
