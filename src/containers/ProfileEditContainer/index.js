import React, { Component } from 'react';
import ProfileEdit from '../../components/ProfileEdit'
import { updateUserInfo, updateUserPassword } from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class ProfileEditContainer extends Component {

  constructor() {
    super()
    this.updateProfile = this.updateProfile.bind(this)
    this.updatePassword = this.updatePassword.bind(this)
  }

  updateProfile(values) {
    this.props.updateUserInfo(values)
  }

  updatePassword(values) {
    this.props.updateUserPassword(values)
  }

  render() {
    return (
      <ProfileEdit updateProfile={this.updateProfile} updatePassword={this.updatePassword} {...this.props.current_user} />
    );
  }
}

function mapStateToProps(state) {
  return {
    current_user: state.current_user
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateUserInfo, updateUserPassword }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileEditContainer)