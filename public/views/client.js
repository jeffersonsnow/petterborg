import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import HomeView from './Home/HomeView.js';
import AboutView from './About/AboutView.js';
import ProductsView from './Products/ProductsView.js';

import Reset from '../styles/Reset.scss';
import Master from '../styles/Master.scss';

class App extends React.Component{
  render(){
    return(
      <Router history={hashHistory}>
						{/* <Route path="/" component={LoginView} onEnter={requireNotLoggedIn}/>
						<Route path="/feed" component={FeedView} onEnter={requireAuth}/>
						<Route path="/profile/:username" component={ProfileView} />
						<Route path="/upload"	component={UploadView} onEnter={requireAuth}/>
						<Route path="/editProfile" component={EditProfileView} onEnter={requireAuth}/>
						<Route path="/search/:searchTerm" component={SearchView}/>
						<Route path="/changePassword" component={ChangePasswordView} onEnter={requireAuth}/>
						<Route path="/notifications" component={NotificationsView} onEnter={requireAuth}/> */}
            <Route path="/" component={HomeView}/>
            <Route path="/about" component={AboutView}/>
            <Route path ="/products" component={ProductsView}/>
				</Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
