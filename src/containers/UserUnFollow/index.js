import React, { Component } from 'react';
import InvisibleButton from '../../components/common/InvisibleButton';
import { Icon } from 'react-materialize';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { unfollow } from './actions'

class UserUnFollow extends Component {

  constructor() {
    super()
    this.unfollow = this.unfollow.bind(this)
  }

  unfollow() {
    this.props.unfollow(this.props.user.id)
  }

  render() {
    return (
      <InvisibleButton onClick={this.unfollow}>
        <Icon small className="grey-text text-darken-2">star_border</Icon>
      </InvisibleButton>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ unfollow }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserUnFollow);