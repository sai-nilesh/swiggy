import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            count :1,
            count2:2,
            git:{
                name:"osho"
            }
        }
      console.log(this.props.name + "Child Constructer");
    }

    async componentDidMount(){
        console.log(this.props.name +"Child Compenent did mount");
        const data = await fetch("https://api.github.com/users/sai-nilesh");
        const json = await data.json();
        this.setState ({
            git:json
        })
        // this.time = setInterval(() => {
        //     console.log("JAI SREE RAM");
        // }, 1000);
        
    };

    componentWillUnmount(){
        //    clearInterval(this.time);
    }
    render(){
        
        
        const{name,location,avatar_url} = this.state.git;
        return(
            <div> 
                {/* {console.log( this.props.name+"Child Render")} */}
               
                <h3>Name:{name}</h3>
                <h5>Location:{location} </h5>
                <img src={avatar_url}/>
                <h5>Contact:@sainilesh76</h5>
            </div>
        )
    }
}

export default UserClass;