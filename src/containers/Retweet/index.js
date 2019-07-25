import React, { Component } from 'react'
import { Col, Icon, Modal, Button, Input } from 'react-materialize'
import InvisibleButton from '../../components/common/InvisibleButton'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createRetweet } from './actions'

class Retweet extends Component {

  constructor(props) {
    super()
    this.change_retweet_value = this.change_retweet_value.bind(this)
    this.postRetweet = this.postRetweet.bind(this)
    this.state = {
      retweet_value: ''
    }
  }

  change_retweet_value(event) {
    this.setState({
      retweet_value: event.target.value
    })
  }

  postRetweet() {
    this.props.createRetweet(this.state.retweet_value, this.props.id)
    this.setState({
      retweet_value: ''
    })
  }
  
  render() {
    return (
      <Col s={1} m={1}>
        <Modal header="Modal Header" fixedFooter
          trigger={<InvisibleButton>
            <Icon>repeat</Icon>
            <span>{(this.props.retweets_count > 0 ? this.props.retweets_count : '')}</span>
          </InvisibleButton>
          }
          actions={
            [
              <Button waves="green" modal="close" flat>Close</Button>,
              <Button waves="green" modal="close" flat onClick={this.postRetweet}>Retweet</Button>]
          }>
          <Input s={12} maxLength="200" label="How about tweet?"
            validate className="text-red" value={this.state.retweet_value}  onChange={this.change_retweet_value} />
          {this.props.body}
        </Modal>
      </Col>
    )
  }
}

function mapStateToProps(state) {
  return {
    tweets: state.tweets
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createRetweet }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Retweet)