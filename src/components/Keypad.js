// Code Keypad Component Here
import React, { Component } from "react";

export default class Keypad extends Component {
  handleFocus = () => console.log("Entering password...");

  render() {
    return (
      <div>
        <input onKeyUp={this.handleFocus} type="password" />
      </div>
    );
  }
}
