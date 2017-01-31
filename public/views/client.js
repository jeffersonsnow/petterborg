import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import HomeView from './Home/HomeView.js';
import AboutView from './About/AboutView.js';
import ProductsView from './Products/ProductsView.js';
import AdminView from './Admin/AdminView.js'


import Reset from '../styles/Reset.scss';
import Master from '../styles/Master.scss';
import NavStyle from '../styles/Nav.scss';
import Home from '../styles/Home.scss';
import ProductStyle from '../styles/Product.scss';
import AboutStyle from '../styles/About.scss';


class App extends React.Component{
  render(){
    return(
      <Router history={hashHistory}>
            <Route path="/" component={HomeView}/>
            <Route path="/about" component={AboutView}/>
            <Route path ="/products" component={ProductsView}/>
            <Route path = "/admin" component={AdminView}/>
				</Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
