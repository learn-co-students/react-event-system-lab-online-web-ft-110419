// Code Keypad Component Here
import React from 'react';

export default class KeyPad extends React.Component {

    logger = () => (
        console.log("Entering password...")
    )
    
    render(){
        return (
        <input onKeyUp={this.logger} type="password" name="password"></input>
        )
    }
}