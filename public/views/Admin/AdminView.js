import React from 'react';
import {Link} from 'react-router';
import Nav from '../Nav/Nav';

export default class AdminView extends React.Component{
  constructor(){
    super();
    this.state={}
  }
  render(){
    return(
      <div>
        <Nav/>
        This is the admin page
        <div>
          
        </div>
      </div>
    )
  }
};
