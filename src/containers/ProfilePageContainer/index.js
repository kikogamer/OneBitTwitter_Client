import React, { Component } from 'react';
import ProfilePage from '../../components/ProfilePage'
import { getUserInfo } from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class ProfilePageContainer extends Component {

  componentDidMount(){
    this.props.getUserInfo(this.props.id)
  }

  render() {
    return (
      <ProfilePage/>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return { 
    user: state.user,
    id: ownProps.match.params.id
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getUserInfo }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePageContainer)