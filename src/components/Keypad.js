import React, { Component } from 'react';

export default class Keypad extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' }
  }

  handleInput = (event) => {
    let newValue = event.target.value
    console.log(event.target.value)
  }

  render() {
    return <input onKeyUp={this.handleInput} type='password' />
  }
}