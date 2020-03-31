import React, { Component } from 'react';

export default class Keypad extends Component {
    handlePasswordEnter = () => {
        console.log('Entering password...')
    }
    
    render() {
        return(
            <div>
                <input onKeyUp={this.handlePasswordEnter} type="password"></input>
            </div>
        )
    }
}