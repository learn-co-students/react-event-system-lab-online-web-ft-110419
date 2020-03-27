// Code Keypad Component Here
import React from 'react'

class KeyPad extends React.Component {

    respondToInput = () => {
        console.log("Entering password...")
      }
      
      render(){
        return(
          <input type="password" onKeyUp={this.respondToInput} /> 
        )
      }

}

export default KeyPad