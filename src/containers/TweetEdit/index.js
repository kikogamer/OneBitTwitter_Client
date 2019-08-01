import React, { Component } from 'react'
import { Dropdown, Icon, Modal, NavItem, Button, Input } from 'react-materialize'
import InvisibleButton from '../../components/common/InvisibleButton'

class TweetEdit extends Component {

  constructor(props) {
    super()
    this.change_body = this.change_body.bind(this)    
    this.state = {
      body: props.body
    }
  }

  change_body(event) {
    this.setState({
      body: event.target.value
    })
  }

  render() {
    return (
      <Dropdown trigger={
        <InvisibleButton>
          <Icon>expand_more</Icon>
        </InvisibleButton>
      }>
        <Modal trigger={
          <NavItem>
            <span className="grey-text text-darken-2">Edit</span>
          </NavItem>
        }
        actions={
          [
            <Button waves="green" modal="close" flat>Close</Button>,
            <Button waves="green" modal="close" flat onClick={() => this.props.updateTweet(this.props.id, this.state.body)}>Update</Button>
          ]
        }>
        <Input s={12} maxLength="200" label="How about tweet?"
            validate className="text-red" defaultValue={this.state.body}  onChange={this.change_body} />
        </Modal>
        <NavItem onClick={() => this.props.deleteTweet(this.props.id)}>
          <span className="grey-text text-darken-2">Remove</span>
        </NavItem>
      </Dropdown>     
      )
    }    
  }
  
export default TweetEdit