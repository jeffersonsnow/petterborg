import React from 'react';
import {Link} from 'react-router';

export default class Nav extends React.Component{
 constructor(props){
   super(props);
   this.state ={}
 }
 render(){
   return(
     <header>
       <div className="nav">
         <ul>
         <Link to='/'>
          <li>Home</li>
         </Link>
         <Link to="/about">
         <li>About</li>
          </Link>
          <Link to="/products">
         <li>Products</li>
          </Link>
       </ul>
       </div>
    </header>
   )
 }

}
