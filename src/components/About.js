import React from "react";
import User from "./User";
import UserClass from "./UserClass";

const About = ()=>{
    return(
        <div>
          
            <h1>About Us</h1>
            <User name = {"SAI NILESH(FUNCTION)"} location = {"Hyderabad"} />
            <hr/>
            <UserClass  name = {"SAI NILESH(CLASS)"} location = {"Bhainsa"} />
        </div>
    )
}

export default About;