
import React from 'react'

class Component extends React.Component {
  sayHello () {
    window.alert('Hey there folks!')
  }

  render () {
    return <button onClick={this.sayHello}>Hey!</button>
  }
}

export default Component