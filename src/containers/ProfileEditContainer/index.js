import React, { Component } from 'react';
import ProfileEdit from '../../components/ProfileEdit'

class ProfileEditContainer extends Component {

  constructor() {
    super()
    this.updateProfile = this.updateProfile.bind(this)
    this.updatePassword = this.updatePassword.bind(this)
  }

  updateProfile(values) {
    console.log('Update Profile', values)
  }

  updatePassword(values) {
    console.log('Update Password', values)
  }

  render() {
    return (
      <ProfileEdit updateProfile={this.updateProfile} updatePassword={this.updatePassword} />
    );
  }
}

export default ProfileEditContainer;