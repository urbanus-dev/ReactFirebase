import React ,{Component} from "react";
// import images from './image.png'
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
        <div className="hello">
            {/* <img src={images} alt="limo" /> */}
            <h1>{this.state.message}</h1>
            <button onClick={()=>this.changeMessage()}  >SUBSCIBING</button>
        </div>
    )
}
}
export default Hello
