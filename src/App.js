import React, { createElement } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import ResMenu from "./components/ResMenu.js";




const Applayout = ()=>{
        return(
               <div>
                  <Header/>
                  <Outlet/>
               </div>
        )
}

const appProvider = createBrowserRouter([
        {
                path:"/",
                element: <Applayout/>,
                children:[
                        {
                                path:"/",
                                element: <Body/>
                                
                        },
                        {
                                path:"/about",
                                element: <About/>
                                
                        },
                        {
                                path:"/contact",
                                element: <Contact/>
                        },
                        {
                                path:"/resturants/:resId",
                                element: <ResMenu/>
                        },
                ],
                errorElement:<Error/>
        },
      
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appProvider} />);