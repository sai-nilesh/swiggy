import React from "react";

const User = (props)=>{
   const {name} = props;
    return(
        <div>
            <h3>Name:{name}</h3>
            <h5>Location:Hyderabad</h5>
            <h5>Contact:@sainilesh76</h5>
        </div>
    )
}

export default User;