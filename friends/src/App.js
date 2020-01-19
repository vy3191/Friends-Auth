import React from 'react';
import Login from './components/Login';
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';
import Loading from './components/Loading';
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
           <Switch>
             <Route exact path="/" component={Login} />
             <Route path="/login" component={Login}/>  
             <Route path="/logout" component={Login} />
             <Route path="/loading" component={Loading} />
             <Route path="/home-page" component={Home} />
             <Route component={Login} />
           </Switch>
         </div>
      </Router>
    </div>
  );
}

export default App;
