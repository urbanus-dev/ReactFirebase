import React ,{Component} from "react";
class Hello extends Component{
    constructor(){
        super()
        this.state={
            message: "welcome urbanus"
        }
    }
    changeMessage(){
      this.setState({
        message:"THANKS FOR SUBSCIBING"
      })
    }
render(){
    return(
        <div>
            <h1>{this.state.message}</h1>
            <button onClick={()=>this.changeMessage()}>SUBSCIBING</button>
        </div>
    )
}
}
export default Hello
