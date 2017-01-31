import React from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';


export default class HomeView extends React.Component{
  constructor(){
    super();
    this.state ={}
  }
render(){
  return(
    <div className="homeview">
      <Nav/>
      <div className="homeHeader">Locally Owned and Harvested</div>
      <div className="homeSubHeader">
      Petterborg Apiaries
      </div>
      <Footer/>
    </div>
  )
}
}
