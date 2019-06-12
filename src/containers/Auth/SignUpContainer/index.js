import React from 'react'
import SignUp from '../../../components/Auth/SignUp'


class SignUpContainer extends React.Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this) 
  }

  handleSubmit(form) {
    console.log(form)
  }

  render() {
    return <SignUp handleSubmit={this.handleSubmit}/>
  }
}

export default SignUpContainer