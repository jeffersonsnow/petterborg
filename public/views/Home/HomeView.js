import React from 'react';
import Nav from '../Nav/Nav';

export default class HomeView extends React.Component{
  constructor(){
    super();
    this.state ={}
  }
render(){
  return(
    <div className="homeview">
      <Nav/>
      <div> this is still home </div>
    </div>
  )
}
}
