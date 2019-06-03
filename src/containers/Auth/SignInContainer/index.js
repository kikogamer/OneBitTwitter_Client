import React from 'react'
import SignIn from '../../../components/Auth/SignIn'

class SignInContainer extends React.Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(form) {
    console.log(form)
  }

  render() {
    return <SignIn handleSubmit={this.handleSubmit} />
  }
}

export default SignInContainer;