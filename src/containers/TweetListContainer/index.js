import React, { Component } from 'react';
import TweetUnit from '../../components/TweetUnit'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteTweet, createTweet, updateTweet } from './actions.js';
import TweetNew from '../../components/TweetNew';
import BottomScrollListener from 'react-bottom-scroll-listener'
import { getTimeline } from '../TimelineContainer/actions'

class TweetListContainer extends Component {

  constructor(props) {
    super()
    this.deleteTweet = this.deleteTweet.bind(this)
    this.postTweet = this.postTweet.bind(this)
    this.updateTweet = this.updateTweet.bind(this)
    this.getTweets = this.getTweets.bind(this)

    this.state = { 
      page_number: 1,
      tweets_count: 0 
    }
  }

  deleteTweet(id) {
    this.props.deleteTweet(id)
  }

  getTweets(){
    console.log(this.state.tweets_count, this.props.tweets.length)
    if (this.state.tweets_count < this.props.tweets.length){
      this.setState({
        page_number: this.state.page_number + 1,
        tweets_count: this.props.tweets.length
      })
  
      this.props.getTimeline(this.state.page_number)
    }    
  }

  postTweet(event) {
    if (event.keyCode === 13) { // is enter key?
      this.props.createTweet(event.target.value)
      event.target.value = ""
    }
  }

  updateTweet(id, body) {
    this.props.updateTweet(id, body)
  }

  render() {
    var tweet_list = this.props.tweets.length ? (this.props.tweets) : []
    return (
      <BottomScrollListener onBottom={this.getTweets}>
        {this.props.current_user.id === this.props.user.id &&
          <TweetNew postTweet={this.postTweet} />
        }
        {tweet_list.map((tweet, i) =>
          <TweetUnit {...tweet}
            key={i}
            deleteTweet={this.deleteTweet}
            current_user={this.props.current_user}
            updateTweet={this.updateTweet}
          />
        )}
      </BottomScrollListener>
    );
  }
}

function mapStateToProps(state) {
  return {
    tweets: state.tweets,
    current_user: state.current_user,
    user: state.user
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deleteTweet, createTweet, updateTweet, getTimeline }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TweetListContainer)