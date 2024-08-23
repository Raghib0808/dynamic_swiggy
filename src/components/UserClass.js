import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props)
        // console.log(props);
        this.state={
            count:0,//first state
            count2:0,//second state
        }
        
    }
        render(){
            return(
                <div className="user_card">
                        <h1>count: {this.state.count}</h1>
                        <button onClick={()=>{
                            // use react method;
                            this.setState({
                                count:this.state.count+1,
                            })
                        }}>Increase</button>
                        <h2>{this.props.name}</h2>
                        <h3>Location: Ghazia bad</h3>
                        <h4>Contact: raghibanis21@gmail.com {this.state.count}</h4>
                </div>
            )
        }
}


export default UserClass;