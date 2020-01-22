import React from 'react';
import Loader from 'react-loader-spinner';
 

export default class Loading extends React.Component {
  //other logic
    render() {
     return(
      <Loader
         style={{marginTop:"200px"}}
         type="Watch"
         color="#00BFFF"
         height={100}
         width={100}
         timeout={4000} //3 secs
      />
     );
    }
 }