// Code EyesOnMe Component Here
import React, { Component } from 'react'

export default class EyesOnMe extends Component {


onBlur = () => {
  console.log('Hey! Eyes on me!')
}

onFocus = () => {
  console.log('Good!')
}

  render() {
    return (
      <div>
      <button onBlur={this.onBlur} onFocus={this.onFocus}>
      Eyes on me, please!
      </button>
      </div>
    )
  }
}
