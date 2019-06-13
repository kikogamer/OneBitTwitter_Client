import React, { Component } from 'react';
import Header from '../../components/Header';
import { logOut } from '../Auth/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class HeaderContainer extends Component {

  render() {
    return (
      <div>
        <Header {...this.props.current_user} logOut={this.props.logOut} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    current_user: state.current_user
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ logOut }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)