import React from 'react';

export default class Loader extends React.Component {
  //other logic
    render() {
     return(
      <Loader
         type="Watch"
         color="#00BFFF"
         height={100}
         width={100}
         timeout={3000} //3 secs
      />
     );
    }
 }