import React ,{Component}from "react";
class Welcome extends Component{
  constructor(){
    super()
      this.state={
        message:"welcome now"
      }
  }
  change(){
      this.setState({
        message:"okay thanks"
      })
  }
    render(){
      
       return(
        <div>
        <h1>{this.state.message}</h1>
        <button onClick={()=>this.change()}>Subscribe</button>
        </div>
       )
    }
}
export default Welcome