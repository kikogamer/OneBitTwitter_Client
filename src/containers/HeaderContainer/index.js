import React, { Component } from 'react';
import Header from '../../components/Header';
import { logOut } from '../Auth/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { executeQuery } from '../../components/Search/actions'

class HeaderContainer extends Component {

  constructor(props){
    super(props)
    this.search = this.search.bind(this)
  }

  search(){
    this.props.executeQuery()
  }

  render() {
    return (
      <div>
        <Header {...this.props.current_user} logOut={this.props.logOut} search={this.search} />
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
  return bindActionCreators({ logOut, executeQuery }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)