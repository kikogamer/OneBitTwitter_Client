import React, { Component } from 'react';
import Timeline from '../../components/Timeline'
import { setUserInfo, getTimeline } from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class TimelineContainer extends Component {
  
  componentDidMount() {
    this.props.setUserInfo(this.props.current_user)
    this.props.getTimeline()
  }

  render() {
    return (
      <div>
        <Timeline state={this.state} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { current_user: state.current_user }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setUserInfo, getTimeline }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TimelineContainer)