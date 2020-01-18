import React from 'react';
import Login from './components/Login';
import PageNotFound from'./components/PageNotFound';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='header'>
        <p>MANANGE YOUR FRIENDS</p>
      </div>
      <Router>
         <div>
           <ul>             
             <li>
               <Link to="/get-friends">Get Friends</Link>
             </li>
             <li>
               <Link to="/add-friends">Add Friends</Link>
             </li>
             <li>
               <Link to="/login">Login</Link>
             </li>
             <li>
               <Link to="/logout">Logout</Link>
             </li>
           </ul>
         </div>
         <div>
           <Switch>
             <Route path="/" component={Login}/>
             <Route path="/log-out" component={Login} />
             <Route component={PageNotFound} />
           </Switch>
         </div>
      </Router>
    </div>
  );
}

export default App;
