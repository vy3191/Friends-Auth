import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute({component:Component, ...rest}) {
   console.log('rest',rest)
   return(
     <Route {...rest} render={(props) => {
         if(localStorage.getItem("token")) {
            return <Component {...props}  update={rest.update} friends={rest.friends}/>;
         } else {
             return <Redirect to="/login" />;
         }
     }} />
   )
}
