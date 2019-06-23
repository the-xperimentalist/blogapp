import React, { Component } from 'react';
import ProfileForm from './subcomponents/profileForm';
import axios from 'axios';
import { Link } from 'react-router-dom';

class SignIn extends Component {
  state = {};
  handle_signin = (e, data) => {
    axios.post('http://localhost:8000/api/writers/signin/', data)
      .then(response => {
        console.log(response.data);
        window.localStorage.token = response.data["token"];
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
                    <ProfileForm typeofform="signin" handle_signin={this.handle_signin} />
                    New to the blog?<Link to="/signup">Sign Up</Link>
                </div>
            </div>
        </div>
        )
  }
}

export default SignIn;
