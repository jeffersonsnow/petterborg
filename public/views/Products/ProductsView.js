import React from 'react';
import Nav from '../Nav/Nav';
import bcrypt from 'bcryptjs';
import Cookies from 'js-cookie';
import axios from 'axios';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

export default class ProductsView extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
          showLogin: false,
      }
  }
  toggleLogin() {
      this.setState({
          showLogin: !this.state.showLogin
      });
  }
  render(){
    return(
      <div className="productView">
        <Nav/>
        <div>
          <div className="productPic">
          </div>
        </div>
        <div className="signandlogin">
          {this.state.showLogin ? <LoginForm/> : <SignUpForm/>}
                      <div className='switchFormContainer'>
                          {this.state.showLogin ? "Don't have an account?" : "Have an account?"}
                          <a onClick={this.toggleLogin.bind(this)}>
                              {this.state.showLogin ? " Sign up" : " Log in"}
                          </a>
                      </div>
        </div>

      </div>
    )
  }
}
