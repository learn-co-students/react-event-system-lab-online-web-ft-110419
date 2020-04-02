
import React, { Component } from 'react'
export default class Keypad extends Component {
  
  
  
  handleKeyPress = () => {
    console.log("Entering password...")
  }
  
  
    render() {
        return  (
          <input onKeyUp={this.handleKeyPress}  type="password" />
          )

    }
}
