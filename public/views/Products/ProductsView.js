import React from 'react';
import Nav from '../Nav/Nav';

export default class ProductsView extends React.Component{
  constructor(){
    super();
    this.state = {}
  }
  render(){
    return(
      <div>
        <Nav/>
        <div>
          Here is the product page!
        </div>
      </div>
    )
  }
}
