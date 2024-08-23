import React from "react";

class Profile extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:[],
        }
    }

    async componentDidMount(){
        const data=await fetch("https://api.github.com/users/Raghib0808");
        // console.log(data);
        const json=await data.json();
        this.setState({
            count:json,
        })

        alert("mounted")
        
        
    }
    componentDidUpdate(){
        alert('updated');
        
    }
    
    render(){
if(this.state.count.length==0){
    return(
        <div>
        <h1>loading</h1>
        </div>
    )
}
        console.log(this.state.count);
        return(
            <div>   
                    <div className="avatar">
                        <img src="https://avatars.githubusercontent.com/u/113364460?v=4"></img>
                    </div>
                    <h1>Name: {this.state.count.login}</h1>
                    <h1>Location:  {this.state.count.location}</h1>
            </div>
        )
    }
    

}

export default Profile