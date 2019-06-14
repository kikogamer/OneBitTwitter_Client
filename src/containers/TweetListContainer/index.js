import React, { Component } from 'react';
import TweetUnit from '../../components/TweetUnit'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class TweetListContainer extends Component {

  render() {
    var tweet_list = this.props.tweets.length ? (this.props.tweets) : []
    return (
      <div>
        {tweet_list.map((tweet, i) =>
          <TweetUnit {...tweet} key={i} />
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { tweets: state.tweets }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TweetListContainer)