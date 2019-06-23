import React, { Component } from 'react';
import ProfileForm from './subcomponents/profileForm';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class SignUp extends Component {
  state = {};
  handle_signup = (e, data) => {
    console.log(data)
    let headers = {'Content-Type': 'multipart/form-data'};
    let formData = new FormData();
    formData.set('name', data['name'])
    formData.set('email', data['email'])
    formData.set('password', data['password'])
    formData.set('description', data['description'])
    formData.append('profile_img', data['profile_img'])
    axios.post('http://localhost:8000/api/writers/signup/', formData, headers={headers})
      .then(response => {
        window.localStorage.token = response.data["token"];
        return <Redirect to='/' />
      })
      .catch(error => {
        console.log(error)
      })
  }
  render () {
    return (
        <div className="container pt-4 pb-4">
            <div className="row justify-content-center">
                <div className="col-lg-12 col-md-12">
                    <ProfileForm typeofform="signup" handle_signup={this.handle_signup} />
                </div>
            </div>
        </div>
        )
  }
}

export default SignUp;
