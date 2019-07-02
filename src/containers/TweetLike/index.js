import React, { Component } from 'react'
import { Col, Icon } from 'react-materialize'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LikeButton from '../../components/common/LikeButton';
import { like } from './actions'

class TweetLike extends Component {

  constructor() {
    super()
    this.like = this.like.bind(this)
  }

  like() {
    this.props.like(this.props.id)
  }
  
  render() {
    return (
      <Col s={1} m={1}>
        <LikeButton onClick={this.like}>
          <Icon>thumb_up</Icon>
          <span>{this.likes_count}</span>
        </LikeButton>
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
  return bindActionCreators({ like }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TweetLike);