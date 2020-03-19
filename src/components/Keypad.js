import React from 'react'


export default class Keypad extends React.Component {
	enterPass(){
		console.log("Entering password...")
	}
	render(){
		return(
			<input type="password" onKeyUp={this.enterPass} ></input>
		)
	}

}
