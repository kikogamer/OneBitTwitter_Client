import React, { Component } from 'react';
import TrendingTopics from '../../components/TrendingTopics'
import { connect } from 'react-redux';
import { getHashtags } from './actions';
import { bindActionCreators } from 'redux';

class TrendingTopicsContainer extends Component {
  componentDidMount() {
    this.props.getHashtags();
  }

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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getHashtags }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TrendingTopicsContainer)