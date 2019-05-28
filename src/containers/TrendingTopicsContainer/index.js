import React, { Component } from 'react';
import TrendingTopics from '../../components/TrendingTopics'

class TrendingTopicsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hashtags: []
    };
  }

  componentDidMount() {
    this.setState({
      hashtags: [['#OneBitCode', '10k'], ['#RubyOnRails', '10k']]
    })
  }

  render() {
    return (
      <div>
        <TrendingTopics hashtags={this.state.hashtags} />
      </div>
    );
  }
}

export default TrendingTopicsContainer;