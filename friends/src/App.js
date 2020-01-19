import React from 'react';
import Login from './components/Login';
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';
import Friends from './components/Friends';
import Loading from './components/Loading';
import EditFriend from './components/EditFriend';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='header'>
        <p style={{textAlign:'left'}}>MANANGE YOUR FRIENDS</p>
      </div>
      <div>
      <div>
        <ul>             
             <li>
               <Link exact to="/">Home</Link>
             </li>
             <li>
               <Link exact to="/login">Login</Link>
             </li>             
             <li>
               <Link exact to="/friends-list">Get Your Friends List</Link>
             </li>
             <li>
               <Link exact to="/logout">Logout</Link>
             </li>
           </ul>
         </div>
      </div>      
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login}/>              
          <Route path="/loading" component={Loading} />
          <Route exact path="/friends-list" component={Friends} />
          <Route path="/friends-list/:id" component={EditFriend} />
          <Route component={Login} />    
        </Switch>
      </div>      
    </div>
  );
}

export default App;
