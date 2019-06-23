import React, { Component } from 'react';
import ProfileForm from './subcomponents/profileForm'

class EditProfile extends Component {
  state = {};
  render () {
    return (
        <div className="container pt-4 pb-4">
            <div className="row justify-content-center">
                <div className="col-lg-12 col-md-12">
                    <ProfileForm typeofform="edit" handle_edit={this.handle_edit} />
                </div>
            </div>
        </div>
        )
  }
}

export default EditProfile;
