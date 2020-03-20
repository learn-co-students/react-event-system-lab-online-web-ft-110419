import React, { Component } from 'react';

export default class Keypad extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' }
  }

  handleInput = (event) => {
    console.log('Entering password...')
    // event.persist()
    // console.log(event.target.value)
    // let newValue = event.target.value
    // this.setState({
    //   value: newValue
    // }, ()=> console.log(event.target.value))
  }

  render() {
    return <input onKeyUp={this.handleInput} type='password' />
  }
}