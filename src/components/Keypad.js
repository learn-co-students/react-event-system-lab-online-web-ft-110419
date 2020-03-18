import React, { Component } from 'react';

export default class Kaypad extends Component {

    handleKeyUp() {
        console.log('Entering password...')
    }

    render() {
        return (
            <input type="password" onKeyUp={this.handleKeyUp}/>
        )
    }
}