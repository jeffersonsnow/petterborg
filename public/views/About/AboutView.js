import React from 'react';
import Nav from '../Nav/Nav';

export default class AboutView extends React.Component{
  constructor(){
    super();
    this.state = {}
  }
render(){
  return(
    <div>
      <Nav/>
      <div>This is the About Page!</div>
    </div>
  )
}

}
