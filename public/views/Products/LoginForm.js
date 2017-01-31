import React from 'react';
import axios from 'axios';
import bcrypt from 'bcryptjs';
import Cookies from 'js-cookie';

export default class LoginForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {}
  }
  handleUserNameChange(event){
    this.setState({username: event.target.value});

  }
  handlePasswordChange(event){
    this.setState({password: event.target.value});
  }
  handleSubmit(event) {
    event.preventDefault();
    axios.get('api/login?email=' + this.state.username).then((response)=>{
      console.log(response);
      if(response.data.length === 0){
        alert('No user found');
      } else {
        console.log(response.data[0]);

        bcrypt.compare(this.state.password, response.data[0].password, function(err, res){
          if(res){
            Cookies.set('user', {
              email: response.data[0].email
            }, {
              expires: 1,
              path: '/'
          });
          window.location.href = '#/about';
        } else {
          alert('Incorrect password and username combination.')
          }
        })
      }
    });
      }

  render(){
    return(

        <div className="formDiv">
          Please Log In
          <form>
            <input onChange={this.handleUserNameChange.bind(this)} type="text" placeholder="Email"/>
            <br/>
            <input onChange={this.handlePasswordChange.bind(this)} type="password" placeholder="Password"/>
            <br/>
            <button className='button' onClick={this.handleSubmit.bind(this)}>Log in</button>
          </form>
          <div>
          </div>
        </div>

    )
  }
}
