import React from 'react';
import axios from 'axios';
import bcrypt from 'bcryptjs';
import Cookies from 'js-cookie';

export default class SignUpForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {}
  }
  handleEmailChange(event){
    this.setState({email: event.target.value});
  }
  handlePasswordChange(event){
    this.setState({password: event.target.value});
  }
  // handleSubmit(event) {
  //   event.preventDefault();
  //   console.log('submitting . . .');
  //   bcrypt.hash(this.state.password, 10, (err, hash) =>{
  //     console.log(this.state);
  //     axios.post(`/api/signup`, {
  //       email: this.state.email,
  //       password: hash,
  //     }).then((response) =>{
  //       console.log('setting cookie');
  //       console.log(response.data);
  //       Cookies.set('user', {
  //         email: response.data.email
  //       }, {
  //         expires: 1,
  //         path: '/'
  //       });
  //       window.location.href='#/products';
  //     }).catch(function(err){
  //       console.log(err);
  //       if(err){
  //         alert('That email already has an account.')
  //       }
  //       })
  //     })
  //   }
  handleSubmit(event){
          event.preventDefault();
          console.log('submitting');
          bcrypt.hash(this.state.password, 10, (err, hash) =>{
              // console.log(this.state.username);
              axios.post(`/api/signup`, {
                  email: this.state.email,
                  password: hash,
              }).then((response) => {
                  console.log('setting cookie');
                  console.log(response.data);
                  Cookies.set('user', {
                      email: response.data.email
                  }, {
                      expires: 1,
                      path: '/'
                  });
                  // window.location.href = '#/about';
              }).catch(function(err){
                  console.log(err);
                  if(err){
                      alert('That email is already taken.');
                  }
              })
          })

  	}
  render(){
    return(
        <div className="formDiv">
          Please Sign Up
          <form>
            <input onChange={this.handleEmailChange.bind(this)} type="text" placeholder="Email"/>
            <br/>
            <input onChange={this.handlePasswordChange.bind(this)} type="password" placeholder="Password"/>
            <br/>
            <button className='button' onClick={this.handleSubmit.bind(this)}>Sign Up</button>
          </form>
          <div>

          </div>
        </div>
    )
  }
}
