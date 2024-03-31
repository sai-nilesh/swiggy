import React from "react";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = ()=>{
        const [btnName ,setbtnName] = useState("Login")
    return(
            <div className="header"> 
                 <div className="img-logo"> 
                    <img className="nav-logo" alt = "nav-logo" src={LOGO_URL}/>
                 </div>
                 <div className="nav-items">
                    <ul>
                            <li> <Link to = "/">Home</Link> </li>
                            <li> <Link to = "/about">About us</Link> </li>
                            <li><Link to = "/contact">Contact Us</Link></li>
                            <li>Cart</li>
                            <button onClick={()=>{
                                btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
                            }}>{btnName}</button>
                    </ul>
                 </div>
            </div>
    )
}

export default Header;