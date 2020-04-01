// Code Keypad Component Here
import React, { Component } from 'react'

export default class Keypad extends Component {


authicatePassword = () => {
  console.log('Entering password...')
}

  render() {
    return (
      <div>
      <input onKeyUp={this.authicatePassword} type="password" />
      </div>
    )
  }
}
