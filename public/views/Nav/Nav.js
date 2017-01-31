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
         <div className="logo"> Petterborg Apiaries </div>
         <div>
         <Link to='/'>
          Home
         </Link>
        </div>
        <div>
         <Link to="/about">
         About
          </Link>
        </div>
        <div>
          <Link to="/products">
         Order
          </Link>
       </div>
       </div>
    </header>
   )
 }

}
