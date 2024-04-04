import React from "react";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = ()=>{
        const [btnName ,setbtnName] = useState("Login");
        const onlineStatus = useOnlineStatus();
    return(
            <div className="flex justify-between pt-6 pb-6 bg-orange-100" > 
                 <div className="img-logo"> 
                    <img className="w-36" alt = "nav-logo" src={LOGO_URL}/>
                 </div>
                 <div className="nav-items">
                    <ul className="flex" >    
                           <li className=" px-6" > Online Status: {onlineStatus ? "🟢" : "🔴" }  </li>
                            <li className=" px-6"> <Link to = "/">Home</Link> </li>
                            <li className=" px-6"> <Link to = "/about">About us</Link> </li>
                            <li className=" px-6"><Link to = "/contact">Contact Us</Link></li>
                            <li className=" px-6">Cart</li>
                            <button onClick={()=>{
                                btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
                            }} className=" px-6">{btnName}</button>
                    </ul>
                 </div>
            </div>
    )
}

export default Header;