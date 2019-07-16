import React, { Component } from 'react'
import { Col, Icon } from 'react-materialize'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import DislikeButton from '../../components/common/DislikeButton';
import { dislike } from './actions'

class TweetDislike extends Component {

  constructor() {
    super()
    this.dislike = this.dislike.bind(this)
  }

  dislike() {
    this.props.dislike(this.props.id)
  }

  render() {
    return (
      <Col s={1} m={1}>
        <DislikeButton onClick={this.dislike} >
          <Icon>thumb_up</Icon>
          <span>{(this.props.likes_count > 0 ? this.props.likes_count : '')}</span>
        </DislikeButton>
      </Col>
    )
  }
}

function mapStateToProps(state) {
  return {
    tweets: state.tweets
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ dislike }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TweetDislike);