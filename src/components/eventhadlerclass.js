import React, { Component } from 'react'

 class Eventhadlerclass extends Component {
    handle(){
        console.log('clicked')
    }
  render() {
    return (
      <div> 
        <button onClick={()=>this.handle}>click here</button>
      </div>
    )
  }
}

export default Eventhadlerclass