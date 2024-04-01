import React from "react";
import User from "./User";
import UserClass from "./UserClass";




class About extends React.Component{

    constructor(props){
        super(props);
        console.log("Parent Constructer");

    }
    componentDidMount(){
        console.log("Parent Compound did mount");
        
    }
    render(){
    return(
        
        <div>
            {console.log("Parent Render")}
            <h1>About Us</h1>
            {/* <User name = {"SAI NILESH(FUNCTION)"} location = {"Hyderabad"} /> */}
            <hr/>
            <UserClass  name = {"First"} location = {"Bhainsa"} />
            {/* <UserClass  name = {"Second"} location = {"Bhainsa"} /> */}
        </div>
    )
    }
}

export default About;