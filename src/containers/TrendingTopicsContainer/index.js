import React, { Component } from 'react';
import TrendingTopics from '../../components/TrendingTopics'
import { connect } from 'react-redux';

class TrendingTopicsContainer extends Component {
  render() {
    return (
      <div>
        <TrendingTopics hashtags={this.props.hashtags} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    hashtags: state.trendings.hashtags
  }
};

export default connect(mapStateToProps)(TrendingTopicsContainer)