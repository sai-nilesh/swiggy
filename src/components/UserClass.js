import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            count :1,
            count2:2
        }

    }
    render(){
        const {name,location } = this.props;
        const {count} = this.state;
        return(
            <div> 
                <h3>Count:{count}</h3>
               
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count+1
                    })
                }}>Incre Count</button>
                <h3>Name:{name}</h3>
                <h5>Location:{location} </h5>
                <h5>Contact:@sainilesh76</h5>
            </div>
        )
    }
}

export default UserClass;