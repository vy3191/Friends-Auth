import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Login from './components/Login';
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';
import Friends from './components/Friends';
import Loading from './components/Loading';
import EditFriend from './components/EditFriend';
import PrivateRoute from './components/PrivateRoute';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import './App.css';
import NewFriends from './components/NewFriends';

function App() {
  const [friends, setFriends] = useState([]);  
  const localToken = localStorage.getItem("token");
  const [token, setToken] = useState(localToken);
  const [isLogin, setLogin] = useState(false);
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
  },[isLogin]);

  const modify = () => {
     setLogin(true);
  } 

  const updateFriends = (newFriendList) => {
    console.log(newFriendList)
      setFriends([...newFriendList]);
  }

  return (
    <div className="App">
      <div className='header'>
        <p style={{textAlign:'left'}}>MANANGE YOUR FRIENDS</p>
      </div>
      <div>
      <div>
        <ul>   
             { localToken &&          
             <li>
             <Link exact to="/">Home</Link>
             </li>}
             <li to="/login">
             <Link exact to="/login">Login</Link>
             </li>        
             <li>
             {localToken && token && <Link exact to="/friends-list">Get Your Friends List</Link>}
             </li>
             <li>
             {localToken && token&& <Link exact to="/add-friends">Add a friend</Link>}
             </li>
             <li>
             {localToken && token && 
             <Link exact to="/logout"><span onClick={() => {localStorage.clear(); setToken(null)} }>Logout</span></Link>}
             </li>
           </ul>
         </div>
      </div>      
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" render={ (props) => <Login {...props} modify={modify} />}/>              
          <Route path="/loading" component={Loading} />
          <PrivateRoute path="/logout" component={Home} />
          <PrivateRoute exact path="/friends-list" friends={friends} update={updateFriends} component={Friends} />
          <PrivateRoute path="/friends-list/:id" component={EditFriend} update={updateFriends} />
          <PrivateRoute path="/add-friends" component={NewFriends} update={updateFriends} />
          <PrivateRoute component={PageNotFound} />  
        </Switch>
      </div>      
    </div>
  );
}

export default App;
