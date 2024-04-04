import React from "react";
import { useState,useEffect } from "react";
import { RES_MENU } from "./constants";

const useResMenu = (resId)=>{
    const[resMenu, setResMenu] = useState(null);
    useEffect(()=>{
        fetchmenu();
    },[]);
   
  

    const fetchmenu = async()=>{
        const data = await fetch(RES_MENU+resId);
        const info = await data.json();
        console.log(info);
        setResMenu(info);
    }

    return resMenu;
}

export default useResMenu;