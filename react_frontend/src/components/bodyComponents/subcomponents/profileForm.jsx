import React, { Component } from 'react';
import axios from 'axios';

class ProfileForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
    description: '',
    profile_img: null
  };
  componentDidMount = () => {
    if (this.props.typeofform === "edit") {
      let writer_id = this.props.match.params.writer_id;
      axios.get("http://localhost:8000/api/writers/"+String(writer_id) + "/")
        .then(function (res) {
          this.setState({
            name: res["name"],
            description: res["description"],
            password: res["password"],
            repeatPassword: res["password"],
            email: res["email"]
          })
        })
        .catch(function (error) {
          console.log(error);
        })
    }
  }
  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevState => {
      const newState = { ...prevState };
      newState[name] = value;
      return newState;
    });
  };
  handleImgChange = e => {
    console.log("Boo")
    this.setState({
      profile_img: e.target.files[0]
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    if(this.props.typeofform === "signup") {
      return this.props.handle_signup(e, this.state);
    }
    else if(this.props.typeofform === "signin") {
      return this.props.handle_signin(e, this.state);
    }
    else if(this.props.typeofform === "edit") {
      return this.props.handle_edit(e, this.state);
    }
  }
  render () {
    return (
        <form onSubmit={this.handleSubmit}>
          {}
          { !(this.props.typeofform === "signin") ? <div className="form-group">
            <label for="inputName">Name</label>
            <input
              type="text"
              className="form-control"
              id="enterName"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="Enter name"
            />
            <small id="emailHelp" className="form-text text-muted">Enter your name</small>
          </div> : <div></div>}
          <div className="form-group">
            <label for="inputEmail">Email</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <small id="emailHelp" className="form-text text-muted">Enter your email</small>
          </div>
          <div className="form-group">
            <label for="inputPassword">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          { !(this.props.typeofform === "signin") ? <React.Fragment>
            <div className="form-group">
            <label for="inputRepeatPassword">Repeat Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword2"
              placeholder="Repeat Password"
              name="repeatPassword"
              value={this.state.repeatPassword}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label for="inputAbout">About me</label>
            <textarea className="form-control" id="exampleTextarea" rows="3" name="description" onChange={this.handleChange}>{this.state.description}</textarea>
          </div>
          <div className="form-group">
            <label for="inputFile">Enter your profile image</label>
            <input
              type="file"
              className="form-control-file"
              id="exampleInputFile"
              accept="image/png, image/jpeg"
              aria-describedby="fileHelp"
              onChange={this.handleImgChange}
            />
          </div>
          </React.Fragment> : <div></div>
        }
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        )
  }
}

export default ProfileForm;
